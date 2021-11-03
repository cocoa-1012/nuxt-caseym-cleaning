<template>
  <div class="modal-overlay1">
    <div class="modal-overlay" @click="$emit('close-modal')"></div>
    <div class="modal">
      <div class="search-div">
        <p>SEARCH</p>
        <input type="text" value="" />
      </div>
      <div class="submit">
        <button @click="$emit('close-modal')">SUBMIT</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.search-div {
  width: 80%;
  display: flex;
  align-items: center;
  border-bottom: solid gray 2px;
}
.submit {
  display: flex;
  flex-direction: row-reverse;
  margin-right: 15%;
}
.modal-overlay1 {
  position: fixed;
  top: 55%;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
}
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
}

.modal {
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  width: 60%;
  height: fit-content;
  border-radius: 5px 0px 0px 5px;
  padding: 20px 50px;
  z-index: 2000;
}

p {
  font-size: 18px;
  font-weight: 600;
  margin: 0px;
}
input {
  width: 100%;
  margin-left: 20px;
  background: none;
  outline: none;
  font-size: 20px;
}
button {
  background: none;
  width: 150px;
  color: #892432;
  font-size: 18px;
  margin-top: 10px;
  font-weight: 600;
  border-radius: 16px;
  width: 20%;
}
</style>