// main.js
import { ProjectModal } from "./modal.js";

const { createApp } = Vue;

createApp({
  components: {
    ProjectModal,
  },
  data() {
    return {
      name: "MightyElemental",
      tagline: "Machine learning engineer and software developer.",
      skills: ["Machine Learning", "Game Development", "Data Visualization", "Web Apps"],
      projects: [],
      loading: true,
      error: null,
      selectedProject: null,
    };
  },
  computed: {
    groupedProjects() {
      const groups = {};
      for (const project of this.projects) {
        const cats =
          project.categories && project.categories.length
            ? project.categories
            : ["uncategorized"];
        for (const cat of cats) {
          const key = cat.toLowerCase();
          if (!groups[key]) groups[key] = [];
          groups[key].push(project);
        }
      }
      return groups;
    },
  },
  methods: {
    async loadProjects() {
      try {
        const response = await fetch("projects/index.yaml");
        if (!response.ok) {
          throw new Error("Could not load projects YAML.");
        }
        const text = await response.text();
        const data = jsyaml.load(text);

        const rawProjects = Array.isArray(data)
          ? data
          : Array.isArray(data.projects)
          ? data.projects
          : [];

        this.projects = rawProjects.map((p, idx) => ({
          id: idx,
          thumbnail: p.images && p.images.length ? p.images[0] : null,
          _prefetched: false,
          ...p,
        }));
      } catch (err) {
        console.error(err);
        this.error = "Failed to load projects.";
      } finally {
        this.loading = false;
      }
    },
    formatCategory(cat) {
      if (!cat) return "";
      return cat
        .toString()
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
    },
    truncate(text, max = 120) {
      if (!text) return "";
      if (text.length <= max) return text;
      return text.slice(0, max - 1).trimEnd() + "…";
    },
    primaryCategory(project) {
      if (!project.categories || !project.categories.length) return "Project";
      return this.formatCategory(project.categories[0]);
    },
    preloadProjectImages(project) {
      // Only preload additional images (beyond thumbnail), and only once per project
      if (!project.images || project.images.length <= 1 || project._prefetched) {
        return;
      }
      project._prefetched = true;

      project.images.slice(1).forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    },
    openProject(project) {
      this.selectedProject = project;
      // Ensure images are preloaded at least now
      this.preloadProjectImages(project);
      document.body.style.overflow = "hidden";
    },
    closeProject() {
      this.selectedProject = null;
      document.body.style.overflow = "";
    },
  },
  mounted() {
    this.loadProjects();
  },
}).mount("#app");
