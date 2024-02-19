import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { AddEditCreditCard } from '@/components/addedit';
import { updateCC } from '@/services';
import * as state from '@/store';

export default function EditCreditCardPage() {
  const navigate = useNavigate();
  const { rowIndex } = useParams();
  const [data, setData] = useState({
    name: '',
    number: '',
    expiration: '',
    cvc: '',
    notes: '',
  });
  const allData = useRecoilValue(state.ccData);
  const userId = useRecoilValue(state.userId);

  useEffect(() => {
    setData(allData[rowIndex]);
  }, [allData, rowIndex]);

  const handleChange = (e) => {
    let newValue = e.target.value;
    if (!newValue) newValue = '';
    setData({ ...data, [e.target.name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      updateCC(
        userId,
        allData[rowIndex].key,
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
      mode={'Edit'}
      data={data}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleCancel={handleCancel}
    />
  );
}
