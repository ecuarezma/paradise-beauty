export const setLanguage = (lang) => {
  switch (lang) {
    case "Spanish":
      return {
        home: {
          temp: "bajo construcción",
        },
        navbar: {
          list: ["Inicio", "Citas", "Servicios", "Tienda"],
        },
        footer: {
          hours: "Horas",
          location: "Dirección",
          weekdays: "Lunes - Viernes",
          saturday: "Sabado",
          sunday: "Domingo",
          closed: "cerrado",
        },
      };
    default:
      return {
        home: {
          temp: "under construction",
        },
        navbar: {
          list: ["Home", "Appointments", "Services", "Shop"],
        },
        footer: {
          hours: "Hours",
          location: "Location",
          weekdays: "Monday - Friday",
          saturday: "Saturday",
          sunday: "Sunday",
          closed: "closed",
        },
      };
  }
};
