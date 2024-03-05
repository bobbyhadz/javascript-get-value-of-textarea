console.log('bobbyhadz.com');

const message = document.getElementById('message');

// ✅ GET the value of textarea
console.log(message.value); // 👉️ ""

// --------------------------------------

// ✅ SET the value of textarea
message.value = 'Hello world!';

// --------------------------------------

// ✅ Append to value of textarea
message.value += ' Appended text.';

// --------------------------------------

// ✅ get value of textarea on change
message.addEventListener('input', function handleChange(event) {
  console.log(event.target.value);
});
