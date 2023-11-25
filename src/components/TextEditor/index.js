import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  SubMainContainer,
  ImageContainer,
  TextImage,
  TextContainer,
  BarContainer,
  ButtonContBold,
  ButtonContItalic,
  ButtonContUn,
  TextAreaElement,
  UnOrderList,
  ListBold,
  ListItalic,
  ListUnderline,
} from './styled'

class TextEditor extends Component {
  state = {bold: false, underline: false, italic: false, userInput: ''}

  changeInput = event => {
    this.setState({userInput: event.target.value})
  }

  boldClick = () => {
    this.setState(prev => ({bold: !prev.bold}))
    console.log('clicked')
  }

  italicClick = () => {
    this.setState(prev => ({italic: !prev.italic}))
  }

  underlineClick = () => {
    this.setState(prev => ({underline: !prev.underline}))
  }

  render() {
    const {bold, italic, underline} = this.state
    console.log(bold, italic, underline)
    return (
      <MainContainer>
        <SubMainContainer>
          <ImageContainer>
            <TextImage>Text Editor</TextImage>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <TextContainer>
            <BarContainer>
              <UnOrderList>
                <ListBold bold>
                  <ButtonContBold
                    data-testid="bold"
                    onClick={this.boldClick}
                    bold
                  >
                    <VscBold />
                  </ButtonContBold>
                </ListBold>
                <ListItalic italic>
                  <ButtonContItalic
                    data-testid="italic"
                    onClick={this.italicClick}
                    italic
                  >
                    <GoItalic />
                  </ButtonContItalic>
                </ListItalic>
                <ListUnderline underline>
                  <ButtonContUn
                    data-testid="underline"
                    onClick={this.underlineClick}
                    underline
                  >
                    <AiOutlineUnderline />
                  </ButtonContUn>
                </ListUnderline>
              </UnOrderList>
            </BarContainer>
            <TextAreaElement
              type="text"
              onChange={this.changeInput}
              bold
              italic
              underline
            />
          </TextContainer>
        </SubMainContainer>
      </MainContainer>
    )
  }
}
export default TextEditor
