<script setup>
import { ref, computed, watch, onMounted } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

const msg = ref("La réponse à toutes vos questions");
const question = ref("");
const userName = ref("");
const answer = ref(
  "Posez votre question. N'oubliez pas le point d'interrogation  ?"
);
const imgAnswer = ref("");
const loading = ref(false);
const history = ref([]);
const modal = ref(null);

onMounted(() => {
  const modalElement = document.getElementById("nameModal");
  modal.value = new bootstrap.Modal(modalElement, {
    backdrop: "static",
    keyboard: false,
  });
  modal.value.show();

  const savedHistory = localStorage.getItem("questionHistory");
  if (savedHistory) {
    history.value = JSON.parse(savedHistory);
  }
});

const saveName = () => {
  if (userName.value.trim() !== "") {
    modal.value.hide();
  }
};

watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes("?")) {
    loading.value = true;
    answer.value = "Thinking...";
    try {
      const response = await fetch("https://yesno.wtf/api");
      const data = await response.json();
      answer.value =
        data.answer === "yes"
          ? "oui"
          : data.answer === "no"
          ? "non"
          : data.answer;
      imgAnswer.value = data.image;
      history.value.push({
        question: newQuestion,
        answer: data.answer,
        date: new Date().toLocaleString(),
        user: userName.value,
      });
      localStorage.setItem("questionHistory", JSON.stringify(history.value));
    } catch (error) {
      answer.value = "Error ! could not reach the Api" + error;
    } finally {
      loading.value = false;
    }
  }
});
</script>

<template>
  <div
    class="modal fade"
    id="nameModal"
    tabindex="-1"
    aria-labelledby="nameModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="nameModalLabel">Bienvenue !</h5>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="userName" class="form-label">Votre nom :</label>
            <input
              type="text"
              class="form-control"
              id="userName"
              v-model="userName"
              @keyup.enter="saveName"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            @click="saveName"
            :disabled="!userName.trim()"
          >
            Commencer
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="page-wrapper bg-danger">
    <main class="container">
      <h1 class="display-4 text-center mb-4">{{ msg }}</h1>
      <h2 class="text-center mb-4">Bienvenue {{ userName }}</h2>
      <input
        :disabled="loading"
        class="form-control mb-3"
        type="text"
        placeholder="Veuillez saisir une question"
        v-model="question"
      />
      <img
        :src="imgAnswer"
        alt=""
        class="img-thumbnail responsive-img img-fluid mb-3"
      />
      <p class="alert alert-light">{{ answer }}</p>

      <div class="mt-4">
        <h3>Historique des questions</h3>
        <div class="list-group">
          <div
            v-for="(item, index) in history"
            :key="index"
            class="list-group-item"
          >
            <p class="mb-1"><strong>Question:</strong> {{ item.question }}</p>
            <p class="mb-1"><strong>Réponse:</strong> {{ item.answer }}</p>
            <small class="text-muted"
              >Par {{ item.user }} le {{ item.date }}</small
            >
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
.page-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 60vw;
  margin: 0 auto;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
}
</style>
