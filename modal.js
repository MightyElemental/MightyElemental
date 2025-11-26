// modal.js
export const ProjectModal = {
  name: "ProjectModal",
  template: "#project-modal-template",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    hasImages() {
      return this.project.images && this.project.images.length > 0;
    },
    currentImage() {
      if (!this.hasImages) return null;
      return this.project.images[this.currentIndex];
    },
  },
  watch: {
    project: {
      immediate: true,
      handler() {
        this.currentIndex = 0;
      },
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    onBackdropClick(event) {
      if (event.target === event.currentTarget) {
        this.close();
      }
    },
    next() {
      if (!this.hasImages) return;
      const len = this.project.images.length;
      this.currentIndex = (this.currentIndex + 1) % len;
    },
    prev() {
      if (!this.hasImages) return;
      const len = this.project.images.length;
      this.currentIndex = (this.currentIndex - 1 + len) % len;
    },
    goTo(index) {
      if (!this.hasImages) return;
      this.currentIndex = index;
    },
    onKeydown(event) {
      if (event.key === "Escape") {
        this.close();
      } else if (event.key === "ArrowRight") {
        this.next();
      } else if (event.key === "ArrowLeft") {
        this.prev();
      }
    },
  },
  mounted() {
    window.addEventListener("keydown", this.onKeydown);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.onKeydown);
  },
};
