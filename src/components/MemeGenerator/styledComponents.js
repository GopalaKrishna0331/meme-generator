import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 0;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px;
  @media screen and (min-width: 768px) {
    order: -1;
    width: 50%;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #35469c;
  font-size: 22px;
  text-align: center;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    font-size: 42px;
    text-align: left;
  }
`

export const Label = styled.label`
  font-family: 'Roboto';
  color: #7e858e;
  font-size: 14px;
`
export const InputElement = styled.input`
  height: 40px;
  margin-top: 4px;
  margin-bottom: 10px;
  border-radius: 6px;
  padding: 4px;
  color: #7e858e;
  font-weight: lighter;
  border: 2px solid #d7dfe9;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const SelectElement = styled.select`
  height: 40px;
  margin-top: 4px;
  margin-bottom: 10px;
  border-radius: 6px;
  padding: 4px;
  color: #7e858e;
  font-weight: lighter;
  border: 2px solid #d7dfe9;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const Button = styled.button`
  height: 40px;
  width: 150px;
  background-color: #0b69ff;
  font-family: 'Roboto';
  cursor: pointer;
  border: none;
  border-radius: 8px;
  color: #ffffff;
`

export const ImageContainer = styled.div`
  background-image: url(${props => props.url});
  height: 400px;
  width: 100%;
  background-size: cover;
  color: #ffffff;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const FooterText = styled.p`
  font-size: ${props => props.fontSize}px;
`

export const HeaderText = styled.p`
  font-size: ${props => props.fontSize}px;
`
