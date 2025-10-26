// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-our-paper-beyond-symmetry-in-repeated-games-with-restarts-was-accepted-to-ijcai-25",
          title: 'Our paper, “Beyond Symmetry in Repeated Games with Restarts”, was accepted to IJCAI’25....',
          description: "",
          section: "News",},{id: "news-i-will-be-in-heidelberg-germany-for-the-12th-heidelberg-laureate-forum",
          title: 'I will be in Heidelberg, Germany for the 12th Heidelberg Laureate Forum.',
          description: "",
          section: "News",},{id: "news-i-will-be-attending-acorn-25",
          title: 'I will be attending ACORN’25.',
          description: "",
          section: "News",},{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=cIdKE0sAAAAJ&hl=en", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
