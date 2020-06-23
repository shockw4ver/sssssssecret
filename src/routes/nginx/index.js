import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import {
  Button,
  Code,
  Frame,
} from 'arwes'
import { NginxStore } from '../../store/nginx'
import {
  Wrapper,
  CodeWrapper,
  Submit
} from './widgets'

const nginxStore = new NginxStore()
export const Nginx = observer(
  function Nginx() {
    function handleClick(name) {
      nginxStore.getNginxConfigContent(name)
    }

    function handleSubmit() {
      nginxStore.updateNginxConfig(
        document.querySelector('#codeEditor').innerHTML
      )
    }

    useEffect(() => {
      nginxStore.getNginxConfigs()
    }, [])

    return (
      <Wrapper>
        {nginxStore.nginxConfigs.map(item => (
          <Button key={item} onClick={() => handleClick(item)}>
            { item }
          </Button>
        ))}

        {nginxStore.currentConfigName && (
          <CodeWrapper>
            <Frame show animate level={3} corners={4}>
              <Code
                animate
                contentEditable
                language="conf"
                id="codeEditor"
              >
                { nginxStore.currentConfigContent }
              </Code>

              <Submit onClick={handleSubmit}>SUBMIT</Submit>
            </Frame>
          </CodeWrapper>
        )}
      </Wrapper>
    )
  }
)

