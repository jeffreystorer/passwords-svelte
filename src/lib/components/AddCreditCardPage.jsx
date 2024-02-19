import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { AddEditCreditCard } from '@/components/addedit';
import { addCC } from '@/services';
import * as state from '@/store';

export default function AddCreditCardPage() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    number: '',
    expiration: '',
    cvc: '',
    notes: '',
  });
  const userId = useRecoilValue(state.userId);

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      addCC(
        userId,
        data.name,
        data.number,
        data.expiration,
        data.cvc,
        data.notes
      );
      navigate('/pages/creditcards');
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    navigate('/pages/creditcards');
  };

  return (
    <AddEditCreditCard
      mode={'Add'}
      data={data}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleCancel={handleCancel}
    />
  );
}
