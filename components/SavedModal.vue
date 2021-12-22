<template>
  <div class="modal-overlay1" @click="boxClick">
    <div class="modal-overlay" @click="closeEmit"></div>
    <div class="modal">
      <div class="search-div">
        <input id="searchInput" type="text" placeholder="SEARCH" value="" />
      </div>
      <div class="submit">
        <button @click="closeEmit">SUBMIT</button>
      </div>
      <button class="close" @click="closeEmit">&times;</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClicked: false,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (this.isClicked === true) {
        document.getElementById('searchInput').value = ''
        this.$emit('close-modal')
        this.isClicked = false
      }
    },
    closeEmit() {
      document.getElementById('searchInput').value = ''
      this.$emit('close-modal')
    },
    boxClick() {
      this.isClicked = true
    },
  },
}
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
  top: 50%;
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
  position: relative;
  flex-direction: column;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  width: 60%;
  height: fit-content;
  border-radius: 5px 0px 0px 5px;
  padding: 20px 50px;
  z-index: 2000;
}
.close {
  position: absolute;
  right: 50px;
  top: 10px;
  width: 30px;
  font-size: 22px !important;
}
button:hover {
  background-color: #892432 !important;
  color: white !important;
}

input {
  width: 100%;
  margin-left: 0px;
  margin-top: 20px;
  background: none;
  outline: none;
  font-size: 16px;
  font-weight: 600;
}
::placeholder {
  color: #1c1818;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  color: #1c1818;
}

::-ms-input-placeholder {
  color: #1c1818;
}
button {
  background: none;
  width: 150px;
  color: #892432;
  font-size: 14px;
  margin-top: 5px;
  font-weight: 400;
  border-radius: 16px;
  width: 20%;
}
</style>