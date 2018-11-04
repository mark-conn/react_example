import * as React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import { signIn } from '../../pages/home/actions';

interface SigninProps {
  signIn: Function;
  username: string;
}

interface SigninState {
  username: string;
}

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const InputWrapper = styled.div`
  display: flex;
`;

const Input = styled.input`
  width: 50%;
  border-radius: 5px;
`;

const Button = styled.div`
  width: 25%;
  padding-left: .5rem;
  padding-right: .5rem;
  padding-top: .25rem;
  padding-bottom: .25rem;
  margin-left: .5rem;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
`;

class Signin extends React.Component<SigninProps, SigninState> {
  state = { username: '' };

  public handleSignIn() {
    this.props.signIn(this.state.username);
  }

  public handleUsername(val: string) {
    this.setState({
      username: val
    })
  }

  public render() {
    return (
      <Wrapper>
        <h1>Welcome, please sign in</h1>
        <InputWrapper>
          <Input type="text" onChange={(e) => {
            this.handleUsername(e.target.value)
          }}/>
          <Button onClick={() => {
            this.handleSignIn()
          }}>
            Submit
          </Button>
        </InputWrapper>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ home }: any) => {
  return {
    username: home.username
  }
}

const mapDispatchToProps = {
  signIn
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);