import * as React from 'react';
import styled from 'styled-components';

interface EntityProps {
  isSelected: boolean
}

const EntityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Entity = styled.div`
  display: flex;
  padding-top: .5rem;
  padding-bottom: .5rem;
  padding-left: .25rem;
  margin-top: .25rem;
  margin-bottom: .25rem;
  border: ${(props: EntityProps) => props.isSelected && '1px solid red'};
  background-color: ${(props: EntityProps) => props.isSelected && 'rgba(255, 0, 0, .25)'};
  border-radius: 5px;
  width: 90%;
`;

const Header = styled.h3``;

const Title = styled.div`
  width: 40%;
`;

const Body = styled.div`
  width: 50%;
  padding-left: 1rem;
`;

const SelectedIndex = styled.div`
  font-size: 2rem;
  color: red;
`;

export default class Selector extends React.Component<any, any> {
  public selected: number[] = [];
  
  state = {
    selected: this.selected
  }

  private select(id: number) {
    const alreadySelected = this.state.selected.indexOf(id) !== -1;
    const atLimit = this.state.selected.length === 5;

    if (alreadySelected && !atLimit) return;

    if (atLimit) {
      this.setState({
        selected: [id]
      })
    } else {
      this.setState({
        selected: this.state.selected.concat(id)
      })
    }
  }

  public render() {
    const { entities, type } = this.props;
    const { selected } = this.state;

    return (
      <div>
        <Header>{type}</Header>
        <div>
          {
            entities.map((item: any) => {
              const isSelected: boolean = selected.indexOf(item.id) !== -1;

              return (
                <EntityWrapper>
                  <Entity 
                    key={item.id}
                    onClick={() => {
                      this.select(item.id)
                    }}
                    isSelected={isSelected}
                  >
                    <Title>
                      {item.title}
                    </Title>
                    { item.body && 
                      <Body>{item.body}</Body>
                    }
                  </Entity>
                  <SelectedIndex>{isSelected && selected.indexOf(item.id) + 1}</SelectedIndex>
                </EntityWrapper>
              )
            })
          }
        </div>
      </div>
    )
  }
}