<template>
  <div v-if="showPopup" class="popup-overlay">
    <div class="popup-modal">
      <h2>Legacy Site</h2>
      <p>This is an older version of my portfolio built with Vue.js.</p>
      <p>If you want to see my latest work, visit:</p>
      <a href="https://www.makmckinney.com" target="_blank">www.makmckinney.com</a>
      <div class="popup-buttons">
        <button @click="redirect">Go to New Site</button>
        <button @click="dismiss">Stay Here</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showPopup = ref(false)

onMounted(() => {
  const seen = localStorage.getItem('legacyPopupSeen')
  if (!seen) {
    showPopup.value = true
  }
})

const redirect = () => {
  window.location.href = 'https://www.makmckinney.com'
}

const dismiss = () => {
  localStorage.setItem('legacyPopupSeen', 'true')
  showPopup.value = false
}
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-modal {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  text-align: center;
}

.popup-buttons {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
}

.popup-buttons button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #333;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}

.popup-buttons button:hover {
  background-color: #555;
}
</style>
