import Input from './components/input';
import Button from './components/Button'
import { Container, Content , Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [CurrentNumber, SetCurrentNumber] = useState('0');
  const [FirstNumber, SetFirstNumber] = useState('0');
  const [Operation, SetOperation] = useState('');

  const HandleAddNumber = (number) => {
    SetCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  };

  const HandleOnClear = () => {
      SetCurrentNumber('0');
  };

  const HandleOnClearAll = () => {
    SetCurrentNumber('0');
    SetFirstNumber('0');
  };

  const HandleSumNumbers = () => {
    if(FirstNumber === '0'){
      SetFirstNumber(String(CurrentNumber))
      SetCurrentNumber('0')
      SetOperation('+')
    }else {
      const Sum = Number(FirstNumber) + Number(CurrentNumber)
      SetCurrentNumber(String(Sum))
      SetOperation('')
    }
  };

  const HandleRemNumbers = () => {
    if(FirstNumber === '0'){
      SetFirstNumber(String(CurrentNumber))
      SetCurrentNumber('0')
      SetOperation('-')
    }else {
      const Rem = Number(FirstNumber) - Number(CurrentNumber)
      SetCurrentNumber(String(Rem))
      SetOperation('')
    }
  };

  const HandleMultNumbers = () => {
    if(FirstNumber === '0'){
      SetFirstNumber(String(CurrentNumber))
      SetCurrentNumber('0')
      SetOperation('*')
    }else {
      const Mult = Number(FirstNumber) * Number(CurrentNumber)
      SetCurrentNumber(String(Mult))
      SetOperation('')
    }
  };

  const HandleDivNumbers = () => {
    if(FirstNumber === '0'){
      SetFirstNumber(String(CurrentNumber))
      SetCurrentNumber('0')
      SetOperation('/')
    }else {
      const Div = Number(FirstNumber) / Number(CurrentNumber)
      SetCurrentNumber(String(Div))
      SetOperation('')
    }
  };

  const HandlePercentage = () => {
    if (FirstNumber !== '0') {
      const Percent = (Number(FirstNumber) * Number(CurrentNumber)) / 100;
      SetCurrentNumber(String(Percent));
    }
  };

  const HandleSquareRoot = () => {
    const Raiz = Math.sqrt(Number(CurrentNumber));
    SetCurrentNumber(String(Raiz));
  };

    const HandleEquals = () => {
      if(FirstNumber !== '0' && Operation !== '' && CurrentNumber !== '0'){
        switch(Operation){
          case '+':
            HandleSumNumbers();
            break;
          case '-':
            HandleRemNumbers();
            break;
          case '*':
            HandleMultNumbers();
            break;
          case '/':
            HandleDivNumbers();
            break;
          default:
            break;
        }
      }
    };  
  
  return (
    <Container>
      <Content>
        <Input value={CurrentNumber} />
        <Row>
          <Button label = "√" onClick= {HandleSquareRoot}/>
          <Button label = "%" onClick= {HandlePercentage}/>
          <Button label = "c" onClick= {HandleOnClear}/>
          <Button label = "ac" onClick={HandleOnClearAll}/>
        </Row>
        <Row>
          <Button label = "7" onClick={() => HandleAddNumber('7')}/>
          <Button label = "8" onClick={() => HandleAddNumber('8')}/>
          <Button label = "9" onClick={() => HandleAddNumber('9')}/>
          <Button label = "/" onClick={HandleDivNumbers}/>
        </Row>
        <Row>
          <Button label = "4" onClick={() => HandleAddNumber('4')}/>
          <Button label = "5" onClick={() => HandleAddNumber('5')}/>
          <Button label = "6" onClick={() => HandleAddNumber('6')}/>
          <Button label = "x" onClick={HandleMultNumbers}/>
        </Row>
        <Row>
          <Button label = "1" onClick={() => HandleAddNumber('1')}/>
          <Button label = "2" onClick={() => HandleAddNumber('2')}/>
          <Button label = "3" onClick={() => HandleAddNumber('3')}/>
          <Button label = "-" onClick={HandleRemNumbers}/>
        </Row>
        <Row>
          <Button label = "." onClick={() => HandleAddNumber('.')}/>
          <Button label = "0" onClick={() => HandleAddNumber('0')}/>
          <Button label = "+" onClick={HandleSumNumbers}/>
          <Button label = "=" onClick={HandleEquals}/>
        </Row>
      </Content>
    </Container>
  );
};

export default App;
