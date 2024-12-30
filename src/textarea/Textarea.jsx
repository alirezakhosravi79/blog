import styled from './textarea.module.css'

function Textarea(props) {
  return (
    <div className={styled.textareaWrapper}>
        <label>{props.lable}</label>
        <textarea onChange={props.change}></textarea>
    </div>
  )
}

export default Textarea