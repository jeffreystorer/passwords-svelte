/* eslint-disable react/prop-types */
import Textarea from 'react-expanding-textarea';
export default function AddCreditCard({
  mode,
  data,
  handleSubmit,
  handleChange,
  handleCancel,
}) {
  const width = window.innerWidth;
  const maxCols = width / 10;
  const cols = (maxCols < 70) ? maxCols : 70;
  return (
    <div className='add-edit'>
      <section>
        <header>
          <h2>{mode} Credit Card</h2>
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
            <label htmlFor='number'>Number</label>
            <input
              id='number'
              name='number'
              type='text'
              defaultValue={data.number}
              onBlur={handleChange}
            />
            <label htmlFor='expiration'>Exp.</label>
            <input
              id='expiration'
              name='expiration'
              type='text'
              defaultValue={data.expiration}
              onBlur={handleChange}
            />
            <label htmlFor='cvc'>CVC</label>
            <input
              id='cvc'
              name='cvc'
              type='text'
              defaultValue={data.cvc}
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
