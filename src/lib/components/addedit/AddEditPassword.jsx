/* eslint-disable react/prop-types */
import Textarea from 'react-expanding-textarea';
export default function AddPassword({
  mode,
  data,
  handleSubmit,
  handleChange,
  handleCancel,
  handleClickPW,
}) {
  const width = window.innerWidth;
  const maxCols = width / 10;
  const cols = (maxCols < 70) ? maxCols : 70;
  return (
    <div className='add-edit'>
      <section>
        <header>
          <h2>{mode} Password</h2>
        </header>
        <form>
          <fieldset>
            <label htmlFor='name'>Name</label>
            <input
              id='name'
              name='name'
              type='text'
              defaultValue={data.name}
              onBlur={handleChange}
            />
            <label htmlFor='url'>Url</label>
            <input
              id='url'
              name='url'
              type='url'
              defaultValue={data.url}
              onBlur={handleChange}
            />
            <label htmlFor='username'>Username</label>
            <input
              id='username'
              name='username'
              type='text'
              defaultValue={data.username}
              onBlur={handleChange}
            />
            <label htmlFor='password' onClick={handleClickPW}>Password</label>
            <input
              id='password'
              name='password'
              type='text'
              defaultValue={data.password}
              onBlur={handleChange}
            />
            <label htmlFor='notes'>Notes</label>
            <Textarea
              id='notes'
              cols={cols}
              rows="4"
              name='notes'
              defaultValue={data.notes}
              onBlur={handleChange}
            />
          </fieldset>          
        </form>
        <footer>
            <button className='not-stacked' onClick={handleCancel}>
              Cancel
            </button>
            <button className='not-stacked' onClick={handleSubmit}>
              Save
            </button>
        </footer>
      </section>
    </div>
  );
}
