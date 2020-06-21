import React, { useCallback, useState } from "react";
import { Words, Heading, Loading } from "arwes";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import { put2Qiniu } from "../utils/qiniu";
import { Modal } from "./modal";

const DropHere = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 300px;
  border: 2px dashed #999;
  margin: 30px auto;
  border-radius: 12px;
  color: #999;
  font-size: 50px;
  outline: none;
  cursor: pointer;
`;

export function Uploader() {
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState('');
  const [resultMessage, setResultMessage] = useState(false);

  function handleClose() {
    setResultMessage('')
  }

  const handleDrop = useCallback(
    files => {
      setLoading(true);

      put2Qiniu(
        files[0],
        res => {
          setLoading(false);
          setResultMessage('Now I know you were so dirty...');
          if (res) {
            setCode(`Get your secret code: ${res.key}`)
          }
        },
        error => {
          console.error(error);
          setResultMessage('It doesn\'t make sense...')
          setCode(`You dirty jerk! ${error}`)
        }
      );
    },
    [setLoading]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop
  });

  return (
    <>
      <Heading node="h1" style={{ marginTop: 30 }}>
        Feed Me With Your Secret
      </Heading>
      <Words animate layer="header">
        Put your secret down here and go away
      </Words>
      <DropHere {...getRootProps()}>
        <input {...getInputProps()} />
        {loading ? <Loading /> : "+"}
      </DropHere>

      {resultMessage && (
        <Modal onClose={handleClose}>
          <h2>Ok I got ya...</h2>
          <p>{ resultMessage }</p>
          <p>Wubba lubba dub dub!</p>
        </Modal>
      )}

      <Words animate layer="">
        { code }
      </Words>
    </>
  );
}
