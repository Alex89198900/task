import React from 'react';
import Card from './Card';
import { QweryType } from 'types';
export interface CardForm {
  elem: Array<QweryType>;
  isLoading?: boolean;
}
function List(props: CardForm) {
  const not = props.elem.length === 0 && props.isLoading === false ? 'Not found' : '';
  const listItems = props.elem.map((el: QweryType) => (
    <li key={el.id} className="item-card">
      <Card num={el} />;
    </li>
  ));
  return (
    <main className="main">
      <h1>{not}</h1>
      <ul className="list-cards">{listItems}</ul>
    </main>
  );
}

export default List;
