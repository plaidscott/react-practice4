import react, {Component} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement( (person) => {
  <div>
    <p>{person.name}</p>
  </div>
});

const SortableList = SortableContainer ( (people) => {
  return (
    <ul>
      {items.map( (person, index ) => {
        <SortableItem key={`item-${index}`} {...person}/>
      })}
    </ul>
  )
})

class SortableComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      people: []
    }
  }
  this.onSortEnd = this.onSortEnd.bind(this);
}

onSortEnd = ({oldIndex, newIndex}) => {
  this.setState({
    people: arrayMove(this.props.people, oldIndex, newIndex)
  })
}
