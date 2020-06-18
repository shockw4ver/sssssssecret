import * as qiniu from "qiniu-js";

async function getToken(filename) {
  const response = await fetch(
    "http://localhost:3000/qiniu_config?filename=" +
      encodeURIComponent(filename)
  );

  const result = await response.json();

  if (result.code === 1) {
    return result.data;
  } else {
    return false;
  }
}

export async function put2Qiniu(file, onOkCallback, onFailCallback) {
  const token = await getToken(file.name);

  if (token) {
    const observable = qiniu.upload(
      file,
      file.name,
      token,
      {
        mimeType: ["image/png", "image/jpeg", "image/gif", "image/svg+xml"]
      },
      {
        useCdnDomain: true,
        region: qiniu.region.z2
      }
    );

    const okHook = onOkCallback || console.log;
    const failHook = onFailCallback || console.error;
    observable.subscribe({
      complete: okHook,
      error: failHook
    });
  }
}
