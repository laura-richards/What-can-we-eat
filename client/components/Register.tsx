export function Register() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('someone wanted to register for your app')
  }

  return (
    <>
      <h1>Register for an account</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input name="name" id="name" type="text" placeholder="name" />
          <label htmlFor="userName">Username:</label>
          <input
            name="userName"
            id="userName"
            type="text"
            placeholder="userName"
          />
          <h3>Select some meals to get you started:</h3>
          <label htmlFor="pancakes">Pancakes</label>
          <input name="pancakes" id="pancakes" type="checkbox" />
          <label htmlFor="nachos">Nachos</label>
          <input name="nachos" id="nachos" type="checkbox" />
          <label htmlFor="cereal">Cereal</label>
          <input name="cereal" id="cereal" type="checkbox" />
          <button>Register</button>
        </form>
      </div>
    </>
  )
}
