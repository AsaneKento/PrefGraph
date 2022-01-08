import { VFC } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { PrefCheckState } from '../../globalState/atoms/PrefCheckState'
import { PrefList } from '../../types/PrefList'

export const CheckBox: VFC<PrefList> = (props) => {
  const { prefCode, prefName } = props
  const [prefCheck, setPrefCheck] = useRecoilState(PrefCheckState)

  const onChangePref = () => {
    const check = prefCheck.filter((text) => text.prefName.includes(prefName))
    if (check.length === 0) {
      setPrefCheck([...prefCheck, {
        prefCode,
        prefName
      }])
    } else {
      const result = prefCheck.filter((text) => !text.prefName.includes(prefName))
      setPrefCheck(result);
    }
  }

  return (
    <Div>
      <Input type="checkbox" id={`${prefCode}`} onChange={onChangePref} />
      <Label htmlFor={`${prefCode}`}>{prefName}</Label>
    </Div>
  )
}

const Div = styled.div`
  width: 100px;
`

const Input = styled.input`
  cursor: pointer;
`

const Label = styled.label`
  cursor: pointer;
  margin-left: 8px;
`
