import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #25262c;
  min-height: 100vh;
`
export const SubMainContainer = styled.div`
  background-color: #1b1c22;
  display: flex;
  padding: 20px;
  width: 80%;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 50%;
`

export const TextImage = styled.h1`
  font-family: 'roboto';
  font-size: 26px;
  color: #ffffff;
`
export const TextContainer = styled.div`
  border: none;
  background-color: #25262c;
  width: 50%;
  border-radius: 10px;
  border: 1px solid #334155;
`
export const BarContainer = styled.div`
  display: flex;
  padding: 14px;
  width: 100%;
  height: 10%;
  border: 1px solid #334155;
  border-top: none;
  border-left: none;
  border-right: none;
`
export const TextAreaElement = styled.textarea`
  padding: 10px;
  color: white;
  background-color: transparent;
  outline: none;
  border: none;
  width: 90%;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
`
export const UnOrderList = styled.ul`
  list-style-type: none;
  display: flex;
`
export const ListBold = styled.li`
  color: ${props => (props.bold ? '#f1f5f9' : '#faff00')};
`
export const ListItalic = styled.li`
  color: ${props => (props.italic ? '#f1f5f9' : '#faff00')};
`
export const ListUnderline = styled.li`
  color: ${props => (props.underline ? '#f1f5f9' : '#faff00')};
`

export const ButtonContBold = styled.button`
  background-color: transparent;
  border: none;
  padding: 5px;
  color: ${props => (props.bold ? '#f1f5f9' : '#faff00')};
  font-size: 20px;
`

export const ButtonContItalic = styled.button`
  background-color: transparent;
  border: none;
  padding: 5px;
  color: ${props => (props.italic ? '#f1f5f9' : '#faff00')};
  font-size: 20px;
`

export const ButtonContUn = styled.button`
  background-color: transparent;
  border: none;
  padding: 5px;
  color: ${props => (props.underline ? '#f1f5f9' : '#faff00')};
  font-size: 20px;
`
