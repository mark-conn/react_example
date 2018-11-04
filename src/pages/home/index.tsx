import * as React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import Signin from '../../components/signIn';
import Loading from '../../components/loading';
import Selector from '../../components/selector';

const Wrapper = styled.div`
  width: 75%;
  margin: 0 auto;
`;

class Home extends React.Component<any, any> {
  public render() {
    const { 
      auth, 
      username, 
      isLoading,
      albums,
      posts
    } = this.props;

    if (!auth) return <Signin />
    if (isLoading) return <Loading />
    return (
      <Wrapper>
        <h1>Welcome {username}</h1>
        <Selector entities={albums.slice(0, 10)} type='Albums' />
        <Selector entities={posts.slice(0, 10)} type='Posts' />
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ context, home }: any) => {
  return {
    auth: context.auth,
    isLoading: context.isLoading,
    username: home.username,
    posts: home.posts,
    albums: home.albums
  }
}

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);