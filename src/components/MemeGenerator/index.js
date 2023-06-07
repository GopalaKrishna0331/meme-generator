import {Component} from 'react'

import {
  Container,
  MainContainer,
  Heading,
  Label,
  InputElement,
  SelectElement,
  Button,
  ImageContainer,
  FormElement,
  HeaderText,
  FooterText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    selected: fontSizesOptionsList[0].optionId,
    topText: '',
    bottomText: '',
    status: false,
    url: '',
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeSelectedItem = event => {
    this.setState({selected: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({status: !prevState.status}))
  }

  urlValue = event => {
    this.setState({url: event.target.value})
  }

  render() {
    const {topText, bottomText, selected, url, status} = this.state
    return (
      <Container data-testid="meme">
        <Heading>Meme Generator</Heading>
        <MainContainer>
          {status ? (
            <ImageContainer url={url} fontSize={selected} testid="meme">
              <HeaderText fontSize={selected}>{topText}</HeaderText>
              <FooterText fontSize={selected}>{bottomText}</FooterText>
            </ImageContainer>
          ) : null}
          <FormElement>
            <Label htmlFor="url">Image Url</Label>
            <InputElement
              type="text"
              value={url}
              id="url"
              onChange={this.urlValue}
            />
            <Label htmlFor="TopText">Top Text</Label>
            <InputElement
              type="text"
              value={topText}
              id="TopText"
              onChange={this.onChangeTopText}
            />
            <Label htmlFor="BottomText">Bottom text</Label>
            <InputElement
              type="text"
              value={bottomText}
              id="BottomText"
              onChange={this.onChangeBottomText}
            />
            <Label htmlFor="selected">font size</Label>
            <SelectElement
              type="select"
              value={selected}
              id="selected"
              onChange={this.onChangeSelectedItem}
            >
              {fontSizesOptionsList.map(each => (
                <option value={each.optionId} key={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </SelectElement>
            <Button type="button" onClick={this.onClickButton}>
              Generate
            </Button>
          </FormElement>
        </MainContainer>
      </Container>
    )
  }
}

export default MemeGenerator
