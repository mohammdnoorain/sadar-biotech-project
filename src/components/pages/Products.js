import React, { useState } from "react";
import HeroSectionProduct from "../HeroSectionProduct";
import Footer from "../Footer";

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const productData = [
    {
      id: 1,
      name: "API, Intermediates & Excipient",
      table: [
        {
          category: "API & Intermediates",
          products: [
            { name: "Amitriptyline HCL", pharmacopeia: "IP/BP/USP" },
            { name: "Bisoprolol Fumarate", pharmacopeia: "USP/BP" },
            { name: "Calcium D Saccharate", pharmacopeia: "USP" },
          ],
        },
        {
          category: "Excipient",
          products: [
            { name: "Crospovidone" },
            { name: "Ethyl Cellulose" },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Pesticides & Fertilizer",
      table: [
        {
          category: "Pesticides & Fertilizer",
          products: [
            { name: "Alpha Cypermethrin", purity: "97%", endUse: "Insecticide", packing: "50 Kg Drum" },
            { name: "Aluminum phosphide", purity: "56%", endUse: "Insecticide", packing: "20 kg Box" },
            { name: "Beauveria Bassiana", purity: "-", endUse: "Bio Fungicide", packing: "-" },
            { name: "Bifenthrin", purity: "96% - 98%", endUse: "Insecticide", packing: "120 Kg Drum" },
            { name: "Chlorantraniliprole", purity: "97%", endUse: "Insecticide", packing: "25 Kg" },
            { name: "Chlormequat Chloride", purity: "60% - 78%", endUse: "PGR", packing: "50/1000 Lt" },
            { name: "Chlorpyrifos", purity: "97% - 98%", endUse: "Insecticide", packing: "275 Kg" },
            { name: "Cloquintocet mexyl", purity: "95% - 97%", endUse: "Herbicide", packing: "25 Kg" },
            { name: "Clomazone", purity: "98%", endUse: "Herbicide", packing: "25/50 Kg" },
            { name: "Copper Hydroxide", purity: "77%", endUse: "Fungicide", packing: "10 Kg" },
            { name: "Copper oxy chloride", purity: "58%", endUse: "Fungicide", packing: "25 Kg" },
            { name: "Cymoxanil", purity: "98%", endUse: "Fungicide", packing: "25 Kg" },
            { name: "Cypermethrin", purity: "93% - 95%", endUse: "Insecticide", packing: "25 Kg, 200 Kg/225/240 Kg" },
            { name: "Cyproconazol", purity: "95%", endUse: "Fungicide", packing: "25 Kg" },
            { name: "Deltamethrin", purity: "98%", endUse: "Insecticide", packing: "25 Kg, 50Kg, 100 kg" },
            { name: "Dicamba", purity: "98%", endUse: "Herbicide", packing: "50 Kg/800 Kg" },
            { name: "2,4 D acid", purity: "98%", endUse: "Herbicide", packing: "900 Kg, 500Kg, 25 Kg" },
            { name: "2,4D Ester", purity: "97%", endUse: "Herbicide", packing: "1100Kg, 250 Kg" },
            { name: "Fipronil", purity: "95%", endUse: "Herbicide", packing: "25kg Drum" },
            { name: "Flufenacet", purity: "95%", endUse: "Herbicide", packing: "25 Kg" },
            { name: "Fluroxypyr", purity: "98%", endUse: "Herbicide", packing: "25/50 Kg" },
            { name: "Indoxocarb", purity: "9:1", endUse: "Insecticide", packing: "25 Kg" },
            { name: "Isoproturon", purity: "97%", endUse: "Herbicide", packing: "25/50Kg" },
            { name: "Lambda cyhalothrin", purity: "97%", endUse: "Insecticide", packing: "25 Kg, 50 Kg" },
            { name: "Mancozeb", purity: "80-85%", endUse: "Fungicide", packing: "10kg 15Kg" },
            { name: "Metamition", purity: "98%", endUse: "Herbicide", packing: "20 Kg" },
            { name: "Metribuzin", purity: "97%", endUse: "Herbicide", packing: "25 Kg" },
            { name: "Mesotrione", purity: "97%", endUse: "Herbicide", packing: "25/50 Kg" },
            { name: "Neem Oil", purity: "-", endUse: "Bio Fungicide", packing: "200 kg" },
            { name: "Permethrin", purity: "92% - 94%", endUse: "Insecticide", packing: "200Kg,25 Kg" },
            { name: "Propiconazole", purity: "95%", endUse: "Fungicide", packing: "220 Kg drum" },
            { name: "Propoxur", purity: "98%", endUse: "Insecticide", packing: "25 Kg Drum" },
            { name: "Pseudomonas fluorescens", purity: "-", endUse: "Bacteria", packing: "-" },
            { name: "Tebuconazole", purity: "97%", endUse: "Insecticide", packing: "25 Kg" },
            { name: "Thiacloprid", purity: "97%", endUse: "Insecticide", packing: "25 Kg" },
            { name: "Transfluthrin", purity: "98%", endUse: "Insecticide", packing: "25Kg, 50Kg" },
            { name: "Tribasic copper sulphate", purity: "97%", endUse: "Fungicide", packing: "25 kg" },
            { name: "Trichoderma Viride", purity: "-", endUse: "Bio Fungicide", packing: "-" },
            { name: "Verticillium Lecanii", purity: "-", endUse: "Bio Fungicide", packing: "-" },
            { name: "Bit 20%", purity: "20 (ppm)", endUse: "Biocide", packing: "200kg Drum" },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Surfactant & Solvent",
      table: [
        {
          category: "Surfactant",
          products: [
            { name: "ALCOL OL 40", Description: "Polyoxy ethylene sorbitol hexaoleate", CASNo: "057171-56-9" },
            { name: "ALCOL OR 36", Description: "Polyethylene glycol Castor Oil", CASNo: "61791-12-6" },
            { name: "ALCOL VO/2003", Description: "Polyethylene Glycol Fatty Acid Ester", CASNo: "220037-02-5" },
            { name: "ALCOL 4894", Description: "Fatty Alcohol Ethoxylate", CASNo: "68131-39-5" },
            { name: "ALCOL 671", Description: "Blend of Surfactants", CASNo: "–" },
            { name: "ALCOL 672", Description: "Blend of Surfactants", CASNo: "–" },
            { name: "ALCOL B10", Description: "Fatty Alcohol ethoxylated", CASNo: "68439-46-3" },
            { name: "ALCOL E/86", Description: "Isodecyl alcohol Ethoxylate", CASNo: "61827-42-7" },
            { name: "ALCOL ES 060", Description: "Tridecyl alcohol ethoxylate", CASNo: "78330-21-9" },
            { name: "ALCOL E 10", Description: "Polyoxyethylene (10) Nonyl Phenol", CASNo: "127087-87-0" },
            { name: "ALCOL E/15", Description: "Tallow Amine (5) Ethoxylated", CASNo: "61791-26-2" },
            { name: "ALCOL ET/25", Description: "Tallow Amine (15) Ethoxylated", CASNo: "61791-26-2" },
            { name: "ALCOL 800", Description: "Isodecyl Alcohol Ethoxylate", CASNo: "61827-42-7" },
            { name: "ALCOL 70 PG", Description: "Dioctyl Sulfosuccinate Sodium Salt", CASNo: "577-11-7" },
            { name: "ALCOL LT 70", Description: "Fatty Alcohol Ethoxylate", CASNo: "68439-50-9" },
            { name: "ALCOL PHX", Description: "2 – Phenoxy Ethanol", CASNo: "122-99-6" },
            { name: "ALCOL 860/P", Description: "Isodecyl Alcohol Ethoxylate", CASNo: "78330-20-8" },
            { name: "ALCOL ID/79", Description: "Isodecyl Alcohol Ethoxylate", CASNo: "61827-42-7" },
            { name: "ALCOL BSU", Description: "Tristyrenated Phenol Ethoxylated", CASNo: "99734-09-5" },
            { name: "ALCOL 4DV", Description: "Polyarylphenyl ether sulphate ammonium salt", CASNo: "137672-70-9" },
            { name: "ALCOL ES CY/8", Description: "Tristyrenated Phenol Ethoxylated", CASNo: "99734-09-5" },
            { name: "ALCOL FL", Description: "Tristyrylphenol ethoxylated 16 EO phosphate ester, TEA Sal", CASNo: "105362-40-1" },
            { name: "ALCOL MNS 90", Description: "Sulphonated Aromatic Polymer,Sodium Salt", CASNo: "04-06-9084" },
            { name: "ALCOL T20", Description: "Polysorbate 20", CASNo: "9005-64-5" },
            { name: "ALCOL T60", Description: "Polysorbate 60", CASNo: "9005-67-8" },
            { name: "ALCOL T80", Description: "Polysorbate 80", CASNo: "9005-65-6" },
            { name: "ALCOL T85", Description: "Polysorbate 85", CASNo: "9005-70-3" },
          ],
        },
        {
          category: "Solvent",
          products: [
          
            { name: "Isophorone", purity: "95-99%", packing: "195 kg Drum" },
            { name: "Solvent S 100", purity: "-", packing: "200 kg Drum & IBC" },
            { name: "Solvent S 150", purity: "-", packing: "200 kg Drum & IBC" },
            { name: "Solvent S 200", purity: "-", packing: "200 kg Drum & IBC" },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Agro Chemical - Technical",
      table: [
        {
          category: "Agro Chemical - Technical",
          products: [
            { name: "Alpha Cypermethrin", purity: "97%", endUse: "Insecticide", packing: "50 Kg Drum" },
  { name: "Aluminum phosphide", purity: "56%", endUse: "Insecticide", packing: "20 kg Box" },
  { name: "Beauveria Bassiana", purity: "-", endUse: "Bio Fungicide", packing: "-" },
  { name: "Bifenthrin", purity: "96% – 98%", endUse: "Insecticide", packing: "120 Kg Drum" },
  { name: "Chlorantraniliprole", purity: "97%", endUse: "Insecticide", packing: "25 Kg" },
  { name: "Chlormequat Chloride", purity: "60% – 78%", endUse: "PGR", packing: "50/1000 Lt" },
  { name: "Chlorpyrifos", purity: "97% – 98%", endUse: "Insecticide", packing: "275 Kg" },
  { name: "Cloquintocet mexyl", purity: "95% – 97%", endUse: "Herbicide", packing: "25 Kg" },
  { name: "Clomazone", purity: "98%", endUse: "Herbicide", packing: "25/50 Kg" },
  { name: "Copper Hydroxide", purity: "77%", endUse: "Fungicide", packing: "10 Kg" },
  { name: "Copper oxy chloride", purity: "58%", endUse: "Fungicide", packing: "25 Kg" },
  { name: "Cymoxanil", purity: "98%", endUse: "Fungicide", packing: "25 Kg" },
  { name: "Cypermethrin", purity: "93% – 95%", endUse: "Insecticide", packing: "25 Kg, 200 Kg/225/240 Kg" },
  { name: "Cyproconazol", purity: "95%", endUse: "Fungicide", packing: "25 Kg" },
  { name: "Deltamethrin", purity: "98%", endUse: "Insecticide", packing: "25 Kg, 50 Kg, 100 kg" },
  { name: "Dicamba", purity: "98%", endUse: "Herbicide", packing: "50 Kg/800 Kg" },
  { name: "2,4 D acid", purity: "98%", endUse: "Herbicide", packing: "900 Kg, 500Kg, 25 Kg" },
  { name: "2,4D Ester", purity: "97%", endUse: "Herbicide", packing: "1100Kg, 250 Kg" },
  { name: "Fipronil", purity: "95%", endUse: "Herbicide", packing: "25kg Drum" },
  { name: "Flufenacet", purity: "95%", endUse: "Herbicide", packing: "25 Kg" },
  { name: "Fluroxypyr", purity: "98%", endUse: "Herbicide", packing: "25/50 Kg" },
  { name: "Indoxocarb", purity: "9:1", endUse: "Insecticide", packing: "25 Kg" },
  { name: "Isoproturon", purity: "97%", endUse: "Herbicide", packing: "25/50Kg" },
  { name: "Lambda cyhalothrin", purity: "97%", endUse: "Insecticide", packing: "25 Kg, 50 Kg" },
  { name: "Mancozeb", purity: "80-85%", endUse: "Fungicide", packing: "10kg 15Kg" },
  { name: "Metamition", purity: "98%", endUse: "Herbicide", packing: "20 Kg" },
  { name: "Metribuzin", purity: "97%", endUse: "Herbicide", packing: "25 Kg" },
  { name: "Mesotrione", purity: "97%", endUse: "Herbicide", packing: "25/50 Kg" },
  { name: "Neem Oil", purity: "-", endUse: "Bio Fungicide", packing: "200 kg" },
  { name: "Permethrin", purity: "92% – 94%", endUse: "Insecticide", packing: "200Kg,25 Kg" },
  { name: "Propiconazole", purity: "95%", endUse: "Fungicide", packing: "220 Kg drum" },
  { name: "Propoxur", purity: "98%", endUse: "Insecticide", packing: "25 Kg Drum" },
  { name: "Pseudomonas fluorescens", purity: "-", endUse: "Bacteria", packing: "-" },
  { name: "Tebuconazole", purity: "97%", endUse: "Insecticide", packing: "25 Kg" },
  { name: "Thiacloprid", purity: "97%", endUse: "Insecticide", packing: "25 Kg" },
  { name: "Transfluthrin", purity: "98%", endUse: "Insecticide", packing: "25Kg, 50Kg" },
  { name: "Tribasic copper sulphate", purity: "97%", endUse: "Fungicide", packing: "25 kg" },
  { name: "Trichoderma Viride", purity: "-", endUse: "Bio Fungicide", packing: "-" },
  { name: "Verticillium Lecanii", purity: "-", endUse: "Bio Fungicide", packing: "-" },
  { name: "Bit 20%", purity: "20 (ppm)", endUse: "Biocide", packing: "200kg Drum" },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <HeroSectionProduct />

      <div className="w-full p-6 bg-gradient-to-r from-green-500 to-sky-500">
        <h1 className="text-4xl font-bold mb-6 text-center text-white">Our Products</h1>
        {productData.map((item, index) => (
          <div
            key={item.id}
            className="border border-white rounded-lg mb-4 p-6 bg-white"
          >
            <h2
              onClick={() => toggleDropdown(index)}
              className="text-2xl font-semibold text-center cursor-pointer transition-transform duration-300 hover:scale-105 hover:text-green-500"
            >
              {item.name}
            </h2>
            {activeIndex === index && (
              <div>
                {item.table.map((tableItem, i) => (
                  <div key={i} className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">{tableItem.category}</h3>
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          {Object.keys(tableItem.products[0] || {}).map((header, idx) => (
                            <th key={idx} className="border border-gray-300 p-2 capitalize">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {tableItem.products.map((product, j) => (
                          <tr key={j} className="hover:bg-gray-200">
                            {Object.values(product).map((value, idx) => (
                              <td key={idx} className="border border-gray-300 p-2">
                                {value}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Products;
