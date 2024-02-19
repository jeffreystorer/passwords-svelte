import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { AddEditPassword } from '@/components/addedit';
import { addPW } from '@/services';
import * as state from '@/store';
import { createRandomPW } from '@/utils';

export default function AddPasswordPage() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    url: 'https://.com',
    username: '',
    password: '',
    notes: '',
  });
  const userId = useRecoilValue(state.userId);
  const randomPW = createRandomPW();

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value, random: '' });

  const handleClickPW = () => {
    setData({ ...data, password: randomPW });
  };

  const copyToClipboard = (str) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      return navigator.clipboard.writeText(str);
    return Promise.reject('The Clipboard API is not available.');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    copyToClipboard(data.password);
    try {
      addPW(
        userId,
        data.name,
        data.url,
        data.username,
        data.password,
        data.notes
      );
      navigate('/pages/passwords');
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    navigate('/pages/passwords');
  };

  return (
    <AddEditPassword
      mode={'Add'}
      data={data}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleClickPW={handleClickPW}
      handleCancel={handleCancel}
    />
  );
}
