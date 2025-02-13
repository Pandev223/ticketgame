

const Displayticket = () => {

  const getitem =   localStorage.getItem('formData');
  const items =JSON.parse(getitem) 
console.log(items.avatarUrl)
  return (
    <div className="displayticket">
      <div className="imgdisplay">

     <img src={items.avatarUrl}alt="" />
      </div>
     <p>{items.fullName}</p>
     <p>{items.email}</p>
<p >Ticket No: #237437467</p>
    </div>
  )
}

export default Displayticket
