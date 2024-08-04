import React, { useEffect, useState } from 'react';
import List from '../components/List';
import Header from '../components/Header';
import Sppiner from '../components/Spinner';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { incrementByAmount } from '../store/redusers/searchreduser';
import { RootState } from 'store/store';
import { useLazyGetStoreDataQuery } from '../store/redusers/apireduser';
import Form from '../components/Form';

function Main() {
  const [fetchTrigger, { data, isLoading }] = useLazyGetStoreDataQuery({});
  const dataInput = useAppSelector((state: RootState) => state.input.value);
  useEffect(() => {
    async function fetchData() {
      fetchTrigger('contacts');
      console.log(data)
    }
    fetchData();
  }, [data, dataInput, fetchTrigger]);

  return (
    <div className="main">
      <h1>Main</h1>
      <Header title="Main" />
      <Form/>
      {isLoading && <Sppiner />}
      <List elem={data?.resources??[]} isLoading={isLoading} />
    </div>
  );
}

export default Main;
