function kenaRazia(date, data) {
    const daerahTilang = ["Gajah Mada", "Hayam Wuruk", "Panglima Polim", "Tomang Raya", "Sisingamangaraja", "Fatmawati"];
    let tilang = [];
    
    data.forEach((vehicle) => {
      let count = 0;
      if (vehicle.type === "Mobil") {
        vehicle.rute.forEach((rute) => {
          if (daerahTilang.includes(rute)) {
            let platParts = vehicle.plat.split(" ");
            let nomorPlat = platParts[1];
            let nomorPlatTerakhir = parseInt(nomorPlat[nomorPlat.length - 1]);
            if (nomorPlatTerakhir % 2 !== date % 2) {
              count++;
            }
          }
        });
      }
      if (count > 0) {
        tilang.push({ name: vehicle.name, tilang: count });
      }
    });
    
    return tilang;
  }
  
  console.log(
    kenaRazia(27, [
      {
        name: "Denver",
        plat: "B 2791 KDS",
        type: "Mobil",
        rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"],
      },
      {
        name: "Toni",
        plat: "B 1212 JBB",
        type: "Mobil",
        rute: ["Pintu Besar Selatan", "Panglima Polim", "Depok", "Senen Raya", "Kemang"],
      },
      {
        name: "Stark",
        plat: "B 444 XSX",
        type: "Motor",
        rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"],
      },
      {
        name: "Anna",
        plat: "B 678 DD",
        type: "Mobil",
        rute: ["Fatmawati", "Panglima Polim", "Depok", "Senen Raya", "Kemang", "Gajah Mada"],
      },
    ])
  );
  
  // [ { name: 'Toni', tilang: 1 }, { name: 'Anna', tilang: 3 } ]
  