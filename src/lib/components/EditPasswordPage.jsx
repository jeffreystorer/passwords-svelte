import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { AddEditPassword } from '@/components/addedit';
import { updatePW } from '@/services';
import * as state from '@/store';
import { createRandomPW } from '@/utils';

export default function EditPasswordPage() {
  const navigate = useNavigate();
  const { rowIndex } = useParams();
  const [data, setData] = useState({
    name: '',
    url: '',
    username: '',
    password: '',
    notes: '',
  });
  const allData = useRecoilValue(state.pwData);
  const userId = useRecoilValue(state.userId);
  const randomPW = createRandomPW();

  useEffect(() => {
    setData(allData[rowIndex]);
  }, [allData, rowIndex]);

  const handleChange = (e) => {
    let newValue = e.target.value;
    if (!newValue) newValue = '';
    setData({ ...data, [e.target.name]: newValue });
  };

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
      updatePW(
        userId,
        allData[rowIndex].key,
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
      mode={'Edit'}
      data={data}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleCancel={handleCancel}
      handleClickPW={handleClickPW}
    />
  );
}
