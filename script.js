const elements = [
    { name: 'Hydrogen', symbol: 'H', atomicNumber: 1, atomicMass: 1.008, valency: 1, atomicity: 1, structureImage: '/path/to/hydrogen.png', formula: 'H<sub>2</sub>', reactionWithWater: 'Forms H<sub>2</sub> gas and OH<sup>-</sup> ions', ion: 'H<sup>+</sup>', shells: [1, 0, 0, 0], protons: 1, neutrons: 0, electrons: 1 },
    { name: 'Helium', symbol: 'He', atomicNumber: 2, atomicMass: 4.0026, valency: 0, atomicity: 1, structureImage: '/path/to/helium.png', formula: 'He', reactionWithWater: 'No reaction', ion: 'He', shells: [2, 0, 0, 0], protons: 2, neutrons: 2, electrons: 2 },
    { name: 'Lithium', symbol: 'Li', atomicNumber: 3, atomicMass: 6.94, valency: 1, atomicity: 1, structureImage: '/path/to/lithium.png', formula: 'Li', reactionWithWater: 'Forms LiOH and H<sub>2</sub>', ion: 'Li<sup>+</sup>', shells: [2, 1, 0, 0], protons: 3, neutrons: 4, electrons: 3 },
    { name: 'Beryllium', symbol: 'Be', atomicNumber: 4, atomicMass: 9.0122, valency: 2, atomicity: 1, structureImage: '/path/to/beryllium.png', formula: 'Be', reactionWithWater: 'No reaction', ion: 'Be<sup>2+</sup>', shells: [2, 2, 0, 0], protons: 4, neutrons: 5, electrons: 4 },
    { name: 'Boron', symbol: 'B', atomicNumber: 5, atomicMass: 10.81, valency: 3, atomicity: 1, structureImage: '/path/to/boron.png', formula: 'B', reactionWithWater: 'No reaction', ion: 'B<sup>3+</sup>', shells: [2, 3, 0, 0], protons: 5, neutrons: 6, electrons: 5 },
    { name: 'Carbon', symbol: 'C', atomicNumber: 6, atomicMass: 12.011, valency: 4, atomicity: 1, structureImage: '/path/to/carbon.png', formula: 'C', reactionWithWater: 'No reaction', ion: 'C<sup>4+</sup>', shells: [2, 4, 0, 0], protons: 6, neutrons: 6, electrons: 6 },
    { name: 'Nitrogen', symbol: 'N', atomicNumber: 7, atomicMass: 14.007, valency: 3, atomicity: 2, structureImage: '/path/to/nitrogen.png', formula: 'N<sub>2</sub>', reactionWithWater: 'No reaction', ion: 'N<sup>3-</sup>', shells: [2, 5, 0, 0], protons: 7, neutrons: 7, electrons: 7 },
    { name: 'Oxygen', symbol: 'O', atomicNumber: 8, atomicMass: 15.999, valency: 2, atomicity: 2, structureImage: '/path/to/oxygen.png', formula: 'O<sub>2</sub>', reactionWithWater: 'No reaction', ion: 'O<sup>2-</sup>', shells: [2, 6, 0, 0], protons: 8, neutrons: 8, electrons: 8 },
    { name: 'Fluorine', symbol: 'F', atomicNumber: 9, atomicMass: 18.998, valency: 1, atomicity: 2, structureImage: '/path/to/fluorine.png', formula: 'F<sub>2</sub>', reactionWithWater: 'Forms HF and O<sub>2</sub>', ion: 'F<sup>-</sup>', shells: [2, 7, 0, 0], protons: 9, neutrons: 10, electrons: 9 },
    { name: 'Neon', symbol: 'Ne', atomicNumber: 10, atomicMass: 20.180, valency: 0, atomicity: 1, structureImage: '/path/to/neon.png', formula: 'Ne', reactionWithWater: 'No reaction', ion: 'Ne', shells: [2, 8, 0, 0], protons: 10, neutrons: 10, electrons: 10 },
    { name: 'Sodium', symbol: 'Na', atomicNumber: 11, atomicMass: 22.990, valency: 1, atomicity: 1, structureImage: '/path/to/sodium.png', formula: 'Na', reactionWithWater: 'Forms NaOH and H<sub>2</sub>', ion: 'Na<sup>+</sup>', shells: [2, 8, 1, 0], protons: 11, neutrons: 12, electrons: 11 },
    { name: 'Magnesium', symbol: 'Mg', atomicNumber: 12, atomicMass: 24.305, valency: 2, atomicity: 1, structureImage: '/path/to/magnesium.png', formula: 'Mg', reactionWithWater: 'Forms Mg(OH)<sub>2</sub> and H<sub>2</sub>', ion: 'Mg<sup>2+</sup>', shells: [2, 8, 2, 0], protons: 12, neutrons: 12, electrons: 12 },
    { name: 'Aluminum', symbol: 'Al', atomicNumber: 13, atomicMass: 26.982, valency: 3, atomicity: 1, structureImage: '/path/to/aluminum.png', formula: 'Al', reactionWithWater: 'Forms Al(OH)<sub>3</sub> and H<sub>2</sub>', ion: 'Al<sup>3+</sup>', shells: [2, 8, 3, 0], protons: 13, neutrons: 14, electrons: 13 },
    { name: 'Silicon', symbol: 'Si', atomicNumber: 14, atomicMass: 28.085, valency: 4, atomicity: 1, structureImage: '/path/to/silicon.png', formula: 'Si', reactionWithWater: 'No reaction', ion: 'Si<sup>4+</sup>', shells: [2, 8, 4, 0], protons: 14, neutrons: 14, electrons: 14 },
    { name: 'Phosphorus', symbol: 'P', atomicNumber: 15, atomicMass: 30.974, valency: 3, atomicity: 4, structureImage: '/path/to/phosphorus.png', formula: 'P<sub>4</sub>', reactionWithWater: 'Forms H<sub>3</sub>PO<sub>4</sub>', ion: 'P<sup>3-</sup>', shells: [2, 8, 5, 0], protons: 15, neutrons: 16, electrons: 15 },
    { name: 'Sulfur', symbol: 'S', atomicNumber: 16, atomicMass: 32.06, valency: 2, atomicity: 8, structureImage: '/path/to/sulfur.png', formula: 'S<sub>8</sub>', reactionWithWater: 'Forms H<sub>2</sub>SO<sub>4</sub>', ion: 'S<sup>2-</sup>', shells: [2, 8, 6, 0], protons: 16, neutrons: 16, electrons: 16 },
    { name: 'Chlorine', symbol: 'Cl', atomicNumber: 17, atomicMass: 35.45, valency: 1, atomicity: 2, structureImage: '/path/to/chlorine.png', formula: 'Cl<sub>2</sub>', reactionWithWater: 'Forms HCl and HOCl', ion: 'Cl<sup>-</sup>', shells: [2, 8, 7, 0], protons: 17, neutrons: 18, electrons: 17 },
    { name: 'Argon', symbol: 'Ar', atomicNumber: 18, atomicMass: 39.948, valency: 0, atomicity: 1, structureImage: '/path/to/argon.png', formula: 'Ar', reactionWithWater: 'No reaction', ion: 'Ar', shells: [2, 8, 8, 0], protons: 18, neutrons: 22, electrons: 18 },
    { name: 'Potassium', symbol: 'K', atomicNumber: 19, atomicMass: 39.098, valency: 1, atomicity: 1, structureImage: '/path/to/potassium.png', formula: 'K', reactionWithWater: 'Forms KOH and H<sub>2</sub>', ion: 'K<sup>+</sup>', shells: [2, 8, 8, 1], protons: 19, neutrons: 20, electrons: 19 },
    { name: 'Calcium', symbol: 'Ca', atomicNumber: 20, atomicMass: 40.078, valency: 2, atomicity: 1, structureImage: '/path/to/calcium.png', formula: 'Ca', reactionWithWater: 'Forms Ca(OH)<sub>2</sub> and H<sub>2</sub>', ion: 'Ca<sup>2+</sup>', shells: [2, 8, 8, 2], protons: 20, neutrons: 20, electrons: 20 },
    { name: 'Scandium', symbol: 'Sc', atomicNumber: 21, atomicMass: 44.956, valency: 3, atomicity: 1, structureImage: '/path/to/scandium.png', formula: 'Sc', reactionWithWater: 'No reaction', ion: 'Sc<sup>3+</sup>', shells: [2, 8, 9, 2], protons: 21, neutrons: 24, electrons: 21 },
    { name: 'Titanium', symbol: 'Ti', atomicNumber: 22, atomicMass: 47.867, valency: 4, atomicity: 1, structureImage: '/path/to/titanium.png', formula: 'Ti', reactionWithWater: 'No reaction', ion: 'Ti<sup>4+</sup>', shells: [2, 8, 10, 2], protons: 22, neutrons: 26, electrons: 22 },
    { name: 'Vanadium', symbol: 'V', atomicNumber: 23, atomicMass: 50.942, valency: 5, atomicity: 1, structureImage: '/path/to/vanadium.png', formula: 'V', reactionWithWater: 'No reaction', ion: 'V<sup>5+</sup>', shells: [2, 8, 11, 2], protons: 23, neutrons: 28, electrons: 23 },
    { name: 'Chromium', symbol: 'Cr', atomicNumber: 24, atomicMass: 51.996, valency: 6, atomicity: 1, structureImage: '/path/to/chromium.png', formula: 'Cr', reactionWithWater: 'No reaction', ion: 'Cr<sup>6+</sup>', shells: [2, 8, 13, 1], protons: 24, neutrons: 28, electrons: 24 },
    { name: 'Manganese', symbol: 'Mn', atomicNumber: 25, atomicMass: 54.938, valency: 7, atomicity: 1, structureImage: '/path/to/manganese.png', formula: 'Mn', reactionWithWater: 'No reaction', ion: 'Mn<sup>7+</sup>', shells: [2, 8, 13, 2], protons: 25, neutrons: 30, electrons: 25 },
    { name: 'Iron', symbol: 'Fe', atomicNumber: 26, atomicMass: 55.845, valency: 2, atomicity: 1, structureImage: '/path/to/iron.png', formula: 'Fe', reactionWithWater: 'Forms Fe(OH)<sub>3</sub>', ion: 'Fe<sup>2+</sup>', shells: [2, 8, 14, 2], protons: 26, neutrons: 30, electrons: 26 },
    { name: 'Cobalt', symbol: 'Co', atomicNumber: 27, atomicMass: 58.933, valency: 2, atomicity: 1, structureImage: '/path/to/cobalt.png', formula: 'Co', reactionWithWater: 'No reaction', ion: 'Co<sup>2+</sup>', shells: [2, 8, 15, 2], protons: 27, neutrons: 32, electrons: 27 },
    { name: 'Nickel', symbol: 'Ni', atomicNumber: 28, atomicMass: 58.693, valency: 2, atomicity: 1, structureImage: '/path/to/nickel.png', formula: 'Ni', reactionWithWater: 'No reaction', ion: 'Ni<sup>2+</sup>', shells: [2, 8, 16, 2], protons: 28, neutrons: 31, electrons: 28 },
    { name: 'Copper', symbol: 'Cu', atomicNumber: 29, atomicMass: 63.546, valency: 2, atomicity: 1, structureImage: '/path/to/copper.png', formula: 'Cu', reactionWithWater: 'No reaction', ion: 'Cu<sup>2+</sup>', shells: [2, 8, 18, 1], protons: 29, neutrons: 35, electrons: 29 },
    { name: 'Zinc', symbol: 'Zn', atomicNumber: 30, atomicMass: 65.38, valency: 2, atomicity: 1, structureImage: '/path/to/zinc.png', formula: 'Zn', reactionWithWater: 'Forms Zn(OH)<sub>2</sub>', ion: 'Zn<sup>2+</sup>', shells: [2, 8, 18, 2], protons: 30, neutrons: 35, electrons: 30 },
    { name: 'Gallium', symbol: 'Ga', atomicNumber: 31, atomicMass: 69.723, valency: 3, atomicity: 1, structureImage: '/path/to/gallium.png', formula: 'Ga', reactionWithWater: 'No reaction', ion: 'Ga<sup>3+</sup>', shells: [2, 8, 18, 3], protons: 31, neutrons: 39, electrons: 31 },
    { name: 'Germanium', symbol: 'Ge', atomicNumber: 32, atomicMass: 72.63, valency: 4, atomicity: 1, structureImage: '/path/to/germanium.png', formula: 'Ge', reactionWithWater: 'No reaction', ion: 'Ge<sup>4+</sup>', shells: [2, 8, 18, 4], protons: 32, neutrons: 41, electrons: 32 },
    { name: 'Arsenic', symbol: 'As', atomicNumber: 33, atomicMass: 74.922, valency: 5, atomicity: 1, structureImage: '/path/to/arsenic.png', formula: 'As', reactionWithWater: 'No reaction', ion: 'As<sup>5+</sup>', shells: [2, 8, 18, 5], protons: 33, neutrons: 42, electrons: 33 },
    { name: 'Selenium', symbol: 'Se', atomicNumber: 34, atomicMass: 78.971, valency: 6, atomicity: 1, structureImage: '/path/to/selenium.png', formula: 'Se', reactionWithWater: 'No reaction', ion: 'Se<sup>6+</sup>', shells: [2, 8, 18, 6], protons: 34, neutrons: 45, electrons: 34 },
    { name: 'Bromine', symbol: 'Br', atomicNumber: 35, atomicMass: 79.904, valency: 1, atomicity: 2, structureImage: '/path/to/bromine.png', formula: 'Br<sub>2</sub>', reactionWithWater: 'Forms HBr and HOBr', ion: 'Br<sup>-</sup>', shells: [2, 8, 18, 7], protons: 35, neutrons: 45, electrons: 35 },
    { name: 'Krypton', symbol: 'Kr', atomicNumber: 36, atomicMass: 83.798, valency: 0, atomicity: 1, structureImage: '/path/to/krypton.png', formula: 'Kr', reactionWithWater: 'No reaction', ion: 'Kr', shells: [2, 8, 18, 8], protons: 36, neutrons: 48, electrons: 36 },
    { name: 'Rubidium', symbol: 'Rb', atomicNumber: 37, atomicMass: 85.468, valency: 1, atomicity: 1, structureImage: '/path/to/rubidium.png', formula: 'Rb', reactionWithWater: 'Forms RbOH and H<sub>2</sub>', ion: 'Rb<sup>+</sup>', shells: [2, 8, 18, 8, 1], protons: 37, neutrons: 48, electrons: 37 },
    { name: 'Strontium', symbol: 'Sr', atomicNumber: 38, atomicMass: 87.62, valency: 2, atomicity: 1, structureImage: '/path/to/strontium.png', formula: 'Sr', reactionWithWater: 'Forms Sr(OH)<sub>2</sub> and H<sub>2</sub>', ion: 'Sr<sup>2+</sup>', shells: [2, 8, 18, 8, 2], protons: 38, neutrons: 50, electrons: 38 },
    { name: 'Yttrium', symbol: 'Y', atomicNumber: 39, atomicMass: 88.906, valency: 3, atomicity: 1, structureImage: '/path/to/yttrium.png', formula: 'Y', reactionWithWater: 'No reaction', ion: 'Y<sup>3+</sup>', shells: [2, 8, 18, 9, 2], protons: 39, neutrons: 50, electrons: 39 },
    { name: 'Zirconium', symbol: 'Zr', atomicNumber: 40, atomicMass: 91.224, valency: 4, atomicity: 1, structureImage: '/path/to/zirconium.png', formula: 'Zr', reactionWithWater: 'No reaction', ion: 'Zr<sup>4+</sup>', shells: [2, 8, 18, 10, 2], protons: 40, neutrons: 51, electrons: 40 },
    { name: 'Niobium', symbol: 'Nb', atomicNumber: 41, atomicMass: 92.906, valency: 5, atomicity: 1, structureImage: '/path/to/niobium.png', formula: 'Nb', reactionWithWater: 'No reaction', ion: 'Nb<sup>5+</sup>', shells: [2, 8, 18, 12, 1], protons: 41, neutrons: 52, electrons: 41 },
    { name: 'Molybdenum', symbol: 'Mo', atomicNumber: 42, atomicMass: 95.95, valency: 6, atomicity: 1, structureImage: '/path/to/molybdenum.png', formula: 'Mo', reactionWithWater: 'No reaction', ion: 'Mo<sup>6+</sup>', shells: [2, 8, 18, 13, 1], protons: 42, neutrons: 54, electrons: 42 },
    { name: 'Technetium', symbol: 'Tc', atomicNumber: 43, atomicMass: 98, valency: 7, atomicity: 1, structureImage: '/path/to/technetium.png', formula: 'Tc', reactionWithWater: 'No reaction', ion: 'Tc<sup>7+</sup>', shells: [2, 8, 18, 13, 2], protons: 43, neutrons: 55, electrons: 43 },
    { name: 'Ruthenium', symbol: 'Ru', atomicNumber: 44, atomicMass: 101.07, valency: 8, atomicity: 1, structureImage: '/path/to/ruthenium.png', formula: 'Ru', reactionWithWater: 'No reaction', ion: 'Ru<sup>8+</sup>', shells: [2, 8, 18, 15, 1], protons: 44, neutrons: 57, electrons: 44 },
    { name: 'Rhodium', symbol: 'Rh', atomicNumber: 45, atomicMass: 102.91, valency: 3, atomicity: 1, structureImage: '/path/to/rhodium.png', formula: 'Rh', reactionWithWater: 'No reaction', ion: 'Rh<sup>3+</sup>', shells: [2, 8, 18, 16, 1], protons: 45, neutrons: 58, electrons: 45 },
    { name: 'Palladium', symbol: 'Pd', atomicNumber: 46, atomicMass: 106.42, valency: 4, atomicity: 1, structureImage: '/path/to/palladium.png', formula: 'Pd', reactionWithWater: 'No reaction', ion: 'Pd<sup>4+</sup>', shells: [2, 8, 18, 18], protons: 46, neutrons: 60, electrons: 46 },
    { name: 'Silver', symbol: 'Ag', atomicNumber: 47, atomicMass: 107.87, valency: 1, atomicity: 1, structureImage: '/path/to/silver.png', formula: 'Ag', reactionWithWater: 'No reaction', ion: 'Ag<sup>+</sup>', shells: [2, 8, 18, 18, 1], protons: 47, neutrons: 61, electrons: 47 },
    { name: 'Cadmium', symbol: 'Cd', atomicNumber: 48, atomicMass: 112.41, valency: 2, atomicity: 1, structureImage: '/path/to/cadmium.png', formula: 'Cd', reactionWithWater: 'No reaction', ion: 'Cd<sup>2+</sup>', shells: [2, 8, 18, 18, 2], protons: 48, neutrons: 64, electrons: 48 },
    { name: 'Indium', symbol: 'In', atomicNumber: 49, atomicMass: 114.82, valency: 3, atomicity: 1, structureImage: '/path/to/indium.png', formula: 'In', reactionWithWater: 'No reaction', ion: 'In<sup>3+</sup>', shells: [2, 8, 18, 18, 3], protons: 49, neutrons: 66, electrons: 49 },
    { name: 'Tin', symbol: 'Sn', atomicNumber: 50, atomicMass: 118.71, valency: 4, atomicity: 1, structureImage: '/path/to/tin.png', formula: 'Sn', reactionWithWater: 'No reaction', ion: 'Sn<sup>4+</sup>', shells: [2, 8, 18, 18, 4], protons: 50, neutrons: 69, electrons: 50 },
    { name: 'Antimony', symbol: 'Sb', atomicNumber: 51, atomicMass: 121.76, valency: 5, atomicity: 1, structureImage: '/path/to/antimony.png', formula: 'Sb', reactionWithWater: 'No reaction', ion: 'Sb<sup>5+</sup>', shells: [2, 8, 18, 18, 5], protons: 51, neutrons: 71, electrons: 51 },
    { name: 'Tellurium', symbol: 'Te', atomicNumber: 52, atomicMass: 127.60, valency: 6, atomicity: 1, structureImage: '/path/to/tellurium.png', formula: 'Te', reactionWithWater: 'No reaction', ion: 'Te<sup>6+</sup>', shells: [2, 8, 18, 18, 6], protons: 52, neutrons: 75, electrons: 52 },
    { name: 'Iodine', symbol: 'I', atomicNumber: 53, atomicMass: 126.90, valency: 1, atomicity: 2, structureImage: '/path/to/iodine.png', formula: 'I<sub>2</sub>', reactionWithWater: 'Forms HI and HOI', ion: 'I<sup>-</sup>', shells: [2, 8, 18, 18, 7], protons: 53, neutrons: 74, electrons: 53 },
    { name: 'Xenon', symbol: 'Xe', atomicNumber: 54, atomicMass: 131.29, valency: 0, atomicity: 1, structureImage: '/path/to/xenon.png', formula: 'Xe', reactionWithWater: 'No reaction', ion: 'Xe', shells: [2, 8, 18, 18, 8], protons: 54, neutrons: 77, electrons: 54 },
    { name: 'Cesium', symbol: 'Cs', atomicNumber: 55, atomicMass: 132.91, valency: 1, atomicity: 1, structureImage: '/path/to/cesium.png', formula: 'Cs', reactionWithWater: 'Forms CsOH and H<sub>2</sub>', ion: 'Cs<sup>+</sup>', shells: [2, 8, 18, 18, 8, 1], protons: 55, neutrons: 78, electrons: 55 },
    { name: 'Barium', symbol: 'Ba', atomicNumber: 56, atomicMass: 137.33, valency: 2, atomicity: 1, structureImage: '/path/to/barium.png', formula: 'Ba', reactionWithWater: 'Forms Ba(OH)<sub>2</sub> and H<sub>2</sub>', ion: 'Ba<sup>2+</sup>', shells: [2, 8, 18, 18, 8, 2], protons: 56, neutrons: 81, electrons: 56 },
    { name: 'Lanthanum', symbol: 'La', atomicNumber: 57, atomicMass: 138.91, valency: 3, atomicity: 1, structureImage: '/path/to/lanthanum.png', formula: 'La', reactionWithWater: 'No reaction', ion: 'La<sup>3+</sup>', shells: [2, 8, 18, 18, 9, 2], protons: 57, neutrons: 82, electrons: 57 },
    { name: 'Cerium', symbol: 'Ce', atomicNumber: 58, atomicMass: 140.12, valency: 4, atomicity: 1, structureImage: '/path/to/cerium.png', formula: 'Ce', reactionWithWater: 'No reaction', ion: 'Ce<sup>4+</sup>', shells: [2, 8, 18, 19, 9, 2], protons: 58, neutrons: 82, electrons: 58 },
    { name: 'Praseodymium', symbol: 'Pr', atomicNumber: 59, atomicMass: 140.91, valency: 5, atomicity: 1, structureImage: '/path/to/praseodymium.png', formula: 'Pr', reactionWithWater: 'No reaction', ion: 'Pr<sup>5+</sup>', shells: [2, 8, 18, 21, 8, 2], protons: 59, neutrons: 82, electrons: 59 },
    { name: 'Neodymium', symbol: 'Nd', atomicNumber: 60, atomicMass: 144.24, valency: 3, atomicity: 1, structureImage: '/path/to/neodymium.png', formula: 'Nd', reactionWithWater: 'No reaction', ion: 'Nd<sup>3+</sup>', shells: [2, 8, 18, 22, 8, 2], protons: 60, neutrons: 84, electrons: 60 },
    { name: 'Promethium', symbol: 'Pm', atomicNumber: 61, atomicMass: 145, valency: 3, atomicity: 1, structureImage: '/path/to/promethium.png', formula: 'Pm', reactionWithWater: 'No reaction', ion: 'Pm<sup>3+</sup>', shells: [2, 8, 18, 23, 8, 2], protons: 61, neutrons: 84, electrons: 61 },
    { name: 'Samarium', symbol: 'Sm', atomicNumber: 62, atomicMass: 150.36, valency: 2, atomicity: 1, structureImage: '/path/to/samarium.png', formula: 'Sm', reactionWithWater: 'No reaction', ion: 'Sm<sup>2+</sup>', shells: [2, 8, 18, 24, 8, 2], protons: 62, neutrons: 88, electrons: 62 },
    { name: 'Europium', symbol: 'Eu', atomicNumber: 63, atomicMass: 151.96, valency: 3, atomicity: 1, structureImage: '/path/to/europium.png', formula: 'Eu', reactionWithWater: 'No reaction', ion: 'Eu<sup>3+</sup>', shells: [2, 8, 18, 25, 8, 2], protons: 63, neutrons: 89, electrons: 63 },
    { name: 'Gadolinium', symbol: 'Gd', atomicNumber: 64, atomicMass: 157.25, valency: 3, atomicity: 1, structureImage: '/path/to/gadolinium.png', formula: 'Gd', reactionWithWater: 'No reaction', ion: 'Gd<sup>3+</sup>', shells: [2, 8, 18, 25, 9, 2], protons: 64, neutrons: 93, electrons: 64 },
    { name: 'Terbium', symbol: 'Tb', atomicNumber: 65, atomicMass: 158.93, valency: 3, atomicity: 1, structureImage: '/path/to/terbium.png', formula: 'Tb', reactionWithWater: 'No reaction', ion: 'Tb<sup>3+</sup>', shells: [2, 8, 18, 27, 8, 2], protons: 65, neutrons: 94, electrons: 65 },
    { name: 'Dysprosium', symbol: 'Dy', atomicNumber: 66, atomicMass: 162.50, valency: 3, atomicity: 1, structureImage: '/path/to/dysprosium.png', formula: 'Dy', reactionWithWater: 'No reaction', ion: 'Dy<sup>3+</sup>', shells: [2, 8, 18, 28, 8, 2], protons: 66, neutrons: 96, electrons: 66 },
    { name: 'Holmium', symbol: 'Ho', atomicNumber: 67, atomicMass: 164.93, valency: 3, atomicity: 1, structureImage: '/path/to/holmium.png', formula: 'Ho', reactionWithWater: 'No reaction', ion: 'Ho<sup>3+</sup>', shells: [2, 8, 18, 29, 8, 2], protons: 67, neutrons: 98, electrons: 67 },
    { name: 'Erbium', symbol: 'Er', atomicNumber: 68, atomicMass: 167.26, valency: 3, atomicity: 1, structureImage: '/path/to/erbium.png', formula: 'Er', reactionWithWater: 'No reaction', ion: 'Er<sup>3+</sup>', shells: [2, 8, 18, 30, 8, 2], protons: 68, neutrons: 99, electrons: 68 },
    { name: 'Thulium', symbol: 'Tm', atomicNumber: 69, atomicMass: 168.93, valency: 3, atomicity: 1, structureImage: '/path/to/thulium.png', formula: 'Tm', reactionWithWater: 'No reaction', ion: 'Tm<sup>3+</sup>', shells: [2, 8, 18, 31, 8, 2], protons: 69, neutrons: 100, electrons: 69 },
    { name: 'Ytterbium', symbol: 'Yb', atomicNumber: 70, atomicMass: 173.05, valency: 2, atomicity: 1, structureImage: '/path/to/ytterbium.png', formula: 'Yb', reactionWithWater: 'No reaction', ion: 'Yb<sup>2+</sup>', shells: [2, 8, 18, 32, 8, 2], protons: 70, neutrons: 103, electrons: 70 },
    { name: 'Lutetium', symbol: 'Lu', atomicNumber: 71, atomicMass: 174.97, valency: 3, atomicity: 1, structureImage: '/path/to/lutetium.png', formula: 'Lu', reactionWithWater: 'No reaction', ion: 'Lu<sup>3+</sup>', shells: [2, 8, 18, 32, 9, 2], protons: 71, neutrons: 104, electrons: 71 },
    { name: 'Hafnium', symbol: 'Hf', atomicNumber: 72, atomicMass: 178.49, valency: 4, atomicity: 1, structureImage: '/path/to/hafnium.png', formula: 'Hf', reactionWithWater: 'No reaction', ion: 'Hf<sup>4+</sup>', shells: [2, 8, 18, 32, 10, 2], protons: 72, neutrons: 106, electrons: 72 },
    { name: 'Tantalum', symbol: 'Ta', atomicNumber: 73, atomicMass: 180.95, valency: 5, atomicity: 1, structureImage: '/path/to/tantalum.png', formula: 'Ta', reactionWithWater: 'No reaction', ion: 'Ta<sup>5+</sup>', shells: [2, 8, 18, 32, 11, 2], protons: 73, neutrons: 108, electrons: 73 },
    { name: 'Tungsten', symbol: 'W', atomicNumber: 74, atomicMass: 183.84, valency: 6, atomicity: 1, structureImage: '/path/to/tungsten.png', formula: 'W', reactionWithWater: 'No reaction', ion: 'W<sup>6+</sup>', shells: [2, 8, 18, 32, 12, 2], protons: 74, neutrons: 110, electrons: 74 },
    { name: 'Rhenium', symbol: 'Re', atomicNumber: 75, atomicMass: 186.21, valency: 7, atomicity: 1, structureImage: '/path/to/rhenium.png', formula: 'Re', reactionWithWater: 'No reaction', ion: 'Re<sup>7+</sup>', shells: [2, 8, 18, 32, 13, 2], protons: 75, neutrons: 111, electrons: 75 },
    { name: 'Osmium', symbol: 'Os', atomicNumber: 76, atomicMass: 190.23, valency: 8, atomicity: 1, structureImage: '/path/to/osmium.png', formula: 'Os', reactionWithWater: 'No reaction', ion: 'Os<sup>8+</sup>', shells: [2, 8, 18, 32, 14, 2], protons: 76, neutrons: 114, electrons: 76 },
    { name: 'Iridium', symbol: 'Ir', atomicNumber: 77, atomicMass: 192.22, valency: 9, atomicity: 1, structureImage: '/path/to/iridium.png', formula: 'Ir', reactionWithWater: 'No reaction', ion: 'Ir<sup>9+</sup>', shells: [2, 8, 18, 32, 15, 2], protons: 77, neutrons: 115, electrons: 77 },
    { name: 'Platinum', symbol: 'Pt', atomicNumber: 78, atomicMass: 195.08, valency: 2, atomicity: 1, structureImage: '/path/to/platinum.png', formula: 'Pt', reactionWithWater: 'No reaction', ion: 'Pt<sup>2+</sup>', shells: [2, 8, 18, 32, 17, 1], protons: 78, neutrons: 117, electrons: 78 },
    { name: 'Gold', symbol: 'Au', atomicNumber: 79, atomicMass: 196.97, valency: 3, atomicity: 1, structureImage: '/path/to/gold.png', formula: 'Au', reactionWithWater: 'No reaction', ion: 'Au<sup>3+</sup>', shells: [2, 8, 18, 32, 18, 1], protons: 79, neutrons: 118, electrons: 79 },
    { name: 'Mercury', symbol: 'Hg', atomicNumber: 80, atomicMass: 200.59, valency: 2, atomicity: 1, structureImage: '/path/to/mercury.png', formula: 'Hg', reactionWithWater: 'No reaction', ion: 'Hg<sup>2+</sup>', shells: [2, 8, 18, 32, 18, 2], protons: 80, neutrons: 121, electrons: 80 },
    { name: 'Thallium', symbol: 'Tl', atomicNumber: 81, atomicMass: 204.38, valency: 3, atomicity: 1, structureImage: '/path/to/thallium.png', formula: 'Tl', reactionWithWater: 'No reaction', ion: 'Tl<sup>3+</sup>', shells: [2, 8, 18, 32, 18, 3], protons: 81, neutrons: 123, electrons: 81 },
    { name: 'Lead', symbol: 'Pb', atomicNumber: 82, atomicMass: 207.2, valency: 4, atomicity: 1, structureImage: '/path/to/lead.png', formula: 'Pb', reactionWithWater: 'No reaction', ion: 'Pb<sup>4+</sup>', shells: [2, 8, 18, 32, 18, 4], protons: 82, neutrons: 125, electrons: 82 },
    { name: 'Bismuth', symbol: 'Bi', atomicNumber: 83, atomicMass: 208.98, valency: 5, atomicity: 1, structureImage: '/path/to/bismuth.png', formula: 'Bi', reactionWithWater: 'No reaction', ion: 'Bi<sup>5+</sup>', shells: [2, 8, 18, 32, 18, 5], protons: 83, neutrons: 126, electrons: 83 },
    { name: 'Polonium', symbol: 'Po', atomicNumber: 84, atomicMass: 209, valency: 6, atomicity: 1, structureImage: '/path/to/polonium.png', formula: 'Po', reactionWithWater: 'No reaction', ion: 'Po<sup>6+</sup>', shells: [2, 8, 18, 32, 18, 6], protons: 84, neutrons: 125, electrons: 84 },
    { name: 'Astatine', symbol: 'At', atomicNumber: 85, atomicMass: 210, valency: 7, atomicity: 1, structureImage: '/path/to/astatine.png', formula: 'At', reactionWithWater: 'No reaction', ion: 'At<sup>7+</sup>', shells: [2, 8, 18, 32, 18, 7], protons: 85, neutrons: 125, electrons: 85 },
    { name: 'Radon', symbol: 'Rn', atomicNumber: 86, atomicMass: 222, valency: 0, atomicity: 1, structureImage: '/path/to/radon.png', formula: 'Rn', reactionWithWater: 'No reaction', ion: 'Rn', shells: [2, 8, 18, 32, 18, 8], protons: 86, neutrons: 136, electrons: 86 },
    { name: 'Francium', symbol: 'Fr', atomicNumber: 87, atomicMass: 223, valency: 1, atomicity: 1, structureImage: '/path/to/francium.png', formula: 'Fr', reactionWithWater: 'Forms FrOH and H<sub>2</sub>', ion: 'Fr<sup>+</sup>', shells: [2, 8, 18, 32, 18, 8, 1], protons: 87, neutrons: 136, electrons: 87 },
    { name: 'Radium', symbol: 'Ra', atomicNumber: 88, atomicMass: 226, valency: 2, atomicity: 1, structureImage: '/path/to/radium.png', formula: 'Ra', reactionWithWater: 'Forms Ra(OH)<sub>2</sub> and H<sub>2</sub>', ion: 'Ra<sup>2+</sup>', shells: [2, 8, 18, 32, 18, 8, 2], protons: 88, neutrons: 138, electrons: 88 },
    { name: 'Actinium', symbol: 'Ac', atomicNumber: 89, atomicMass: 227, valency: 3, atomicity: 1, structureImage: '/path/to/actinium.png', formula: 'Ac', reactionWithWater: 'No reaction', ion: 'Ac<sup>3+</sup>', shells: [2, 8, 18, 32, 18, 9, 2], protons: 89, neutrons: 138, electrons: 89 },
    { name: 'Thorium', symbol: 'Th', atomicNumber: 90, atomicMass: 232.04, valency: 4, atomicity: 1, structureImage: '/path/to/thorium.png', formula: 'Th', reactionWithWater: 'No reaction', ion: 'Th<sup>4+</sup>', shells: [2, 8, 18, 32, 18, 10, 2], protons: 90, neutrons: 142, electrons: 90 },
    { name: 'Protactinium', symbol: 'Pa', atomicNumber: 91, atomicMass: 231.04, valency: 5, atomicity: 1, structureImage: '/path/to/protactinium.png', formula: 'Pa', reactionWithWater: 'No reaction', ion: 'Pa<sup>5+</sup>', shells: [2, 8, 18, 32, 20, 9, 2], protons: 91, neutrons: 140, electrons: 91 },
    { name: 'Uranium', symbol: 'U', atomicNumber: 92, atomicMass: 238.03, valency: 6, atomicity: 1, structureImage: '/path/to/uranium.png', formula: 'U', reactionWithWater: 'No reaction', ion: 'U<sup>6+</sup>', shells: [2, 8, 18, 32, 21, 9, 2], protons: 92, neutrons: 146, electrons: 92 },
    { name: 'Neptunium', symbol: 'Np', atomicNumber: 93, atomicMass: 237, valency: 7, atomicity: 1, structureImage: '/path/to/neptunium.png', formula: 'Np', reactionWithWater: 'No reaction', ion: 'Np<sup>7+</sup>', shells: [2, 8, 18, 32, 22, 9, 2], protons: 93, neutrons: 144, electrons: 93 },
    { name: 'Plutonium', symbol: 'Pu', atomicNumber: 94, atomicMass: 244, valency: 8, atomicity: 1, structureImage: '/path/to/plutonium.png', formula: 'Pu', reactionWithWater: 'No reaction', ion: 'Pu<sup>8+</sup>', shells: [2, 8, 18, 32, 24, 8, 2], protons: 94, neutrons: 150, electrons: 94 },
    { name: 'Americium', symbol: 'Am', atomicNumber: 95, atomicMass: 243, valency: 3, atomicity: 1, structureImage: '/path/to/americium.png', formula: 'Am', reactionWithWater: 'No reaction', ion: 'Am<sup>3+</sup>', shells: [2, 8, 18, 32, 25, 8, 2], protons: 95, neutrons: 148, electrons: 95 },
    { name: 'Curium', symbol: 'Cm', atomicNumber: 96, atomicMass: 247, valency: 3, atomicity: 1, structureImage: '/path/to/curium.png', formula: 'Cm', reactionWithWater: 'No reaction', ion: 'Cm<sup>3+</sup>', shells: [2, 8, 18, 32, 25, 9, 2], protons: 96, neutrons: 151, electrons: 96 },
    { name: 'Berkelium', symbol: 'Bk', atomicNumber: 97, atomicMass: 247, valency: 3, atomicity: 1, structureImage: '/path/to/berkelium.png', formula: 'Bk', reactionWithWater: 'No reaction', ion: 'Bk<sup>3+</sup>', shells: [2, 8, 18, 32, 27, 8, 2], protons: 97, neutrons: 150, electrons: 97 },
    { name: 'Californium', symbol: 'Cf', atomicNumber: 98, atomicMass: 251, valency: 3, atomicity: 1, structureImage: '/path/to/californium.png', formula: 'Cf', reactionWithWater: 'No reaction', ion: 'Cf<sup>3+</sup>', shells: [2, 8, 18, 32, 28, 8, 2], protons: 98, neutrons: 153, electrons: 98 },
    { name: 'Einsteinium', symbol: 'Es', atomicNumber: 99, atomicMass: 252, valency: 3, atomicity: 1, structureImage: '/path/to/einsteinium.png', formula: 'Es', reactionWithWater: 'No reaction', ion: 'Es<sup>3+</sup>', shells: [2, 8, 18, 32, 29, 8, 2], protons: 99, neutrons: 153, electrons: 99 },
    { name: 'Fermium', symbol: 'Fm', atomicNumber: 100, atomicMass: 257, valency: 3, atomicity: 1, structureImage: '/path/to/fermium.png', formula: 'Fm', reactionWithWater: 'No reaction', ion: 'Fm<sup>3+</sup>', shells: [2, 8, 18, 32, 30, 8, 2], protons: 100, neutrons: 157, electrons: 100 },
    { name: 'Mendelevium', symbol: 'Md', atomicNumber: 101, atomicMass: 258, valency: 3, atomicity: 1, structureImage: '/path/to/mendelevium.png', formula: 'Md', reactionWithWater: 'No reaction', ion: 'Md<sup>3+</sup>', shells: [2, 8, 18, 32, 31, 8, 2], protons: 101, neutrons: 157, electrons: 101 },
    { name: 'Nobelium', symbol: 'No', atomicNumber: 102, atomicMass: 259, valency: 3, atomicity: 1, structureImage: '/path/to/nobelium.png', formula: 'No', reactionWithWater: 'No reaction', ion: 'No<sup>3+</sup>', shells: [2, 8, 18, 32, 32, 8, 2], protons: 102, neutrons: 157, electrons: 102 },
    { name: 'Lawrencium', symbol: 'Lr', atomicNumber: 103, atomicMass: 262, valency: 3, atomicity: 1, structureImage: '/path/to/lawrencium.png', formula: 'Lr', reactionWithWater: 'No reaction', ion: 'Lr<sup>3+</sup>', shells: [2, 8, 18, 32, 32, 8, 3], protons: 103, neutrons: 159, electrons: 103 },
    { name: 'Rutherfordium', symbol: 'Rf', atomicNumber: 104, atomicMass: 267, valency: 4, atomicity: 1, structureImage: '/path/to/rutherfordium.png', formula: 'Rf', reactionWithWater: 'No reaction', ion: 'Rf<sup>4+</sup>', shells: [2, 8, 18, 32, 32, 10, 2], protons: 104, neutrons: 163, electrons: 104 },
    { name: 'Dubnium', symbol: 'Db', atomicNumber: 105, atomicMass: 270, valency: 5, atomicity: 1, structureImage: '/path/to/dubnium.png', formula: 'Db', reactionWithWater: 'No reaction', ion: 'Db<sup>5+</sup>', shells: [2, 8, 18, 32, 32, 11, 2], protons: 105, neutrons: 165, electrons: 105 },
    { name: 'Seaborgium', symbol: 'Sg', atomicNumber: 106, atomicMass: 271, valency: 6, atomicity: 1, structureImage: '/path/to/seaborgium.png', formula: 'Sg', reactionWithWater: 'No reaction', ion: 'Sg<sup>6+</sup>', shells: [2, 8, 18, 32, 32, 12, 2], protons: 106, neutrons: 165, electrons: 106 },
    { name: 'Bohrium', symbol: 'Bh', atomicNumber: 107, atomicMass: 270, valency: 7, atomicity: 1, structureImage: '/path/to/bohrium.png', formula: 'Bh', reactionWithWater: 'No reaction', ion: 'Bh<sup>7+</sup>', shells: [2, 8, 18, 32, 32, 13, 2], protons: 107, neutrons: 157, electrons: 107 },
    { name: 'Hassium', symbol: 'Hs', atomicNumber: 108, atomicMass: 270, valency: 8, atomicity: 1, structureImage: '/path/to/hassium.png', formula: 'Hs', reactionWithWater: 'No reaction', ion: 'Hs<sup>8+</sup>', shells: [2, 8, 18, 32, 32, 14, 2], protons: 108, neutrons: 157, electrons: 108 },
    { name: 'Meitnerium', symbol: 'Mt', atomicNumber: 109, atomicMass: 278, valency: 1, atomicity: 1, structureImage: '/path/to/meitnerium.png', formula: 'Mt', reactionWithWater: 'No reaction', ion: 'Mt<sup>1+</sup>', shells: [2, 8, 18, 32, 32, 15, 2], protons: 109, neutrons: 157, electrons: 109 },
    { name: 'Darmstadtium', symbol: 'Ds', atomicNumber: 110, atomicMass: 281, valency: 2, atomicity: 1, structureImage: '/path/to/darmstadtium.png', formula: 'Ds', reactionWithWater: 'No reaction', ion: 'Ds<sup>2+</sup>', shells: [2, 8, 18, 32, 32, 17, 1], protons: 110, neutrons: 171, electrons: 110 },
    { name: 'Roentgenium', symbol: 'Rg', atomicNumber: 111, atomicMass: 282, valency: 3, atomicity: 1, structureImage: '/path/to/roentgenium.png', formula: 'Rg', reactionWithWater: 'No reaction', ion: 'Rg<sup>3+</sup>', shells: [2, 8, 18, 32, 32, 18, 1], protons: 111, neutrons: 171, electrons: 111 },
    { name: 'Copernicium', symbol: 'Cn', atomicNumber: 112, atomicMass: 285, valency: 2, atomicity: 1, structureImage: '/path/to/copernicium.png', formula: 'Cn', reactionWithWater: 'No reaction', ion: 'Cn<sup>2+</sup>', shells: [2, 8, 18, 32, 32, 18, 2], protons: 112, neutrons: 173, electrons: 112 },
    { name: 'Nihonium', symbol: 'Nh', atomicNumber: 113, atomicMass: 286, valency: 3, atomicity: 1, structureImage: '/path/to/nihonium.png', formula: 'Nh', reactionWithWater: 'No reaction', ion: 'Nh<sup>3+</sup>', shells: [2, 8, 18, 32, 32, 18, 3], protons: 113, neutrons: 173, electrons: 113 },
    { name: 'Flerovium', symbol: 'Fl', atomicNumber: 114, atomicMass: 289, valency: 4, atomicity: 1, structureImage: '/path/to/flerovium.png', formula: 'Fl', reactionWithWater: 'No reaction', ion: 'Fl<sup>4+</sup>', shells: [2, 8, 18, 32, 32, 18, 4], protons: 114, neutrons: 175, electrons: 114 },
    { name: 'Moscovium', symbol: 'Mc', atomicNumber: 115, atomicMass: 290, valency: 5, atomicity: 1, structureImage: '/path/to/moscovium.png', formula: 'Mc', reactionWithWater: 'No reaction', ion: 'Mc<sup>5+</sup>', shells: [2, 8, 18, 32, 32, 18, 5], protons: 115, neutrons: 175, electrons: 115 },
    { name: 'Livermorium', symbol: 'Lv', atomicNumber: 116, atomicMass: 293, valency: 6, atomicity: 1, structureImage: '/path/to/livermorium.png', formula: 'Lv', reactionWithWater: 'No reaction', ion: 'Lv<sup>6+</sup>', shells: [2, 8, 18, 32, 32, 18, 6], protons: 116, neutrons: 177, electrons: 116 },
    { name: 'Tennessine', symbol: 'Ts', atomicNumber: 117, atomicMass: 294, valency: 7, atomicity: 1, structureImage: '/path/to/tennessine.png', formula: 'Ts', reactionWithWater: 'No reaction', ion: 'Ts<sup>7+</sup>', shells: [2, 8, 18, 32, 32, 18, 7], protons: 117, neutrons: 177, electrons: 117 },
    { name: 'Oganesson', symbol: 'Og', atomicNumber: 118, atomicMass: 294, valency: 0, atomicity: 1, structureImage: '/path/to/oganesson.png', formula: 'Og', reactionWithWater: 'No reaction', ion: 'Og', shells: [2, 8, 18, 32, 32, 18, 8], protons: 118, neutrons: 176, electrons: 118 }
];


const compounds = [
    {
        name: 'Water',
        formula: 'H<sub>2</sub>O',
        structureImage: '/path/to/water.png',
        cation: 'H<sup>+</sup>',
        anion: 'OH<sup>-</sup>',
        atomicMass: 18.015
    },
    {
        name: 'Carbon Dioxide',
        formula: 'CO<sub>2</sub>',
        structureImage: '/path/to/co2.png',
        cation: 'C<sup>4+</sup>',
        anion: 'O<sup>2-</sup>',
        atomicMass: 44.01
    },
    {
        name: 'Sodium Chloride',
        formula: 'NaCl',
        structureImage: '/path/to/nacl.png',
        cation: 'Na<sup>+</sup>',
        anion: 'Cl<sup>-</sup>',
        atomicMass: 58.44
    },
    {
        name: 'Ammonia',
        formula: 'NH<sub>3</sub>',
        structureImage: '/path/to/ammonia.png',
        cation: 'N<sup>3-</sup>',
        anion: 'H<sup>+</sup>',
        atomicMass: 17.031
    },
    {
        name: 'Glucose',
        formula: 'C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>',
        structureImage: '/path/to/glucose.png',
        cation: '',
        anion: '',
        atomicMass: 180.18
    },
    {
        name: 'Hydrochloric Acid',
        formula: 'HCl',
        structureImage: '/path/to/hcl.png',
        cation: 'H<sup>+</sup>',
        anion: 'Cl<sup>-</sup>',
        atomicMass: 36.461
    },
    {
        name: 'Sulfuric Acid',
        formula: 'H<sub>2</sub>SO<sub>4</sub>',
        structureImage: '/path/to/h2so4.png',
        cation: 'H<sup>+</sup>',
        anion: 'SO<sub>4</sub><sup>2-</sup>',
        atomicMass: 98.079
    },
    {
        name: 'Ethanol',
        formula: 'C<sub>2</sub>H<sub>5</sub>OH',
        structureImage: '/path/to/ethanol.png',
        cation: '',
        anion: '',
        atomicMass: 46.068
    },
    {
        name: 'Acetic Acid',
        formula: 'C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>',
        structureImage: '/path/to/acetic_acid.png',
        cation: 'H<sup>+</sup>',
        anion: 'C<sub>2</sub>H<sub>3</sub>O<sub>2</sub><sup>-</sup>',
        atomicMass: 60.052
    },
    {
        name: 'Calcium Carbonate',
        formula: 'CaCO<sub>3</sub>',
        structureImage: '/path/to/caco3.png',
        cation: 'Ca<sup>2+</sup>',
        anion: 'CO<sub>3</sub><sup>2-</sup>',
        atomicMass: 100.09
    },
    {
        name: 'Sodium Bicarbonate',
        formula: 'NaHCO<sub>3</sub>',
        structureImage: '/path/to/nahco3.png',
        cation: 'Na<sup>+</sup>',
        anion: 'HCO<sub>3</sub><sup>-</sup>',
        atomicMass: 84.01
    },
    {
        name: 'Potassium Chloride',
        formula: 'KCl',
        structureImage: '/path/to/kcl.png',
        cation: 'K<sup>+</sup>',
        anion: 'Cl<sup>-</sup>',
        atomicMass: 74.55
    },
    {
        name: 'Magnesium Sulfate',
        formula: 'MgSO<sub>4</sub>',
        structureImage: '/path/to/mgso4.png',
        cation: 'Mg<sup>2+</sup>',
        anion: 'SO<sub>4</sub><sup>2-</sup>',
        atomicMass: 120.37
    },
    {
        name: 'Iron(III) Oxide',
        formula: 'Fe<sub>2</sub>O<sub>3</sub>',
        structureImage: '/path/to/fe2o3.png',
        cation: 'Fe<sup>3+</sup>',
        anion: 'O<sup>2-</sup>',
        atomicMass: 159.69
    },
    {
        name: 'Copper(II) Sulfate',
        formula: 'CuSO<sub>4</sub>',
        structureImage: '/path/to/cuso4.png',
        cation: 'Cu<sup>2+</sup>',
        anion: 'SO<sub>4</sub><sup>2-</sup>',
        atomicMass: 159.61
    },
    {
        name: 'Calcium Sulfate',
        formula: 'CaSO<sub>4</sub>',
        structureImage: '/path/to/caso4.png',
        cation: 'Ca<sup>2+</sup>',
        anion: 'SO<sub>4</sub><sup>2-</sup>',
        atomicMass: 136.14
    },
    {
        name: 'Lead(II) Acetate',
        formula: 'Pb(C<sub>2</sub>H<sub>3</sub>O<sub>2</sub>)<sub>2</sub>',
        structureImage: '/path/to/pbacetate.png',
        cation: 'Pb<sup>2+</sup>',
        anion: 'C<sub>2</sub>H<sub>3</sub>O<sub>2</sub><sup>-</sup>',
        atomicMass: 379.33
    },
    {
        name: 'Barium Chloride',
        formula: 'BaCl<sub>2</sub>',
        structureImage: '/path/to/bacl2.png',
        cation: 'Ba<sup>2+</sup>',
        anion: 'Cl<sup>-</sup>',
        atomicMass: 137.33
    },
    {
        name: 'Zinc Oxide',
        formula: 'ZnO',
        structureImage: '/path/to/zno.png',
        cation: 'Zn<sup>2+</sup>',
        anion: 'O<sup>2-</sup>',
        atomicMass: 81.38
    },
    {
        name: 'Silver Nitrate',
        formula: 'AgNO<sub>3</sub>',
        structureImage: '/path/to/agno3.png',
        cation: 'Ag<sup>+</sup>',
        anion: 'NO<sub>3</sub><sup>-</sup>',
        atomicMass: 169.87
    },
    {
        name: 'Potassium Nitrate',
        formula: 'KNO<sub>3</sub>',
        structureImage: '/path/to/kno3.png',
        cation: 'K<sup>+</sup>',
        anion: 'NO<sub>3</sub><sup>-</sup>',
        atomicMass: 101.10
    },
    {
        name: 'Boric Acid',
        formula: 'H<sub>3</sub>BO<sub>3</sub>',
        structureImage: '/path/to/h3bo3.png',
        cation: 'H<sup>+</sup>',
        anion: 'B(OH)<sub>4</sub><sup>-</sup>',
        atomicMass: 61.83
    },
    {
        name: 'Sodium Hydroxide',
        formula: 'NaOH',
        structureImage: '/path/to/naoh.png',
        cation: 'Na<sup>+</sup>',
        anion: 'OH<sup>-</sup>',
        atomicMass: 40.00
    },
    {
        name: 'Acetone',
        formula: 'C<sub>3</sub>H<sub>6</sub>O',
        structureImage: '/path/to/acetone.png',
        cation: '',
        anion: '',
        atomicMass: 58.08
    },
    {
        name: 'Tartaric Acid',
        formula: 'C<sub>4</sub>H<sub>6</sub>O<sub>6</sub>',
        structureImage: '/path/to/tartaric_acid.png',
        cation: '',
        anion: '',
        atomicMass: 150.09
    },
    {
        name: 'Citric Acid',
        formula: 'C<sub>6</sub>H<sub>8</sub>O<sub>7</sub>',
        structureImage: '/path/to/citric_acid.png',
        cation: '',
        anion: '',
        atomicMass: 192.13
    },
    {
        name: 'Sodium Phosphate',
        formula: 'Na<sub>3</sub>PO<sub>4</sub>',
        structureImage: '/path/to/sodium_phosphate.png',
        cation: 'Na<sup>+</sup>',
        anion: 'PO<sub>4</sub><sup>3-</sup>',
        atomicMass: 163.94
    },
    {
        name: 'Sodium Sulfate',
        formula: 'Na<sub>2</sub>SO<sub>4</sub>',
        structureImage: '/path/to/sodium_sulfate.png',
        cation: 'Na<sup>+</sup>',
        anion: 'SO<sub>4</sub><sup>2-</sup>',
        atomicMass: 142.04
    }
];


    

elements.sort((a, b) => a.atomicNumber - b.atomicNumber);
compounds.sort((a, b) => a.name.localeCompare(b.name));

function drawAtomicStructure(element, canvasId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(centerX, centerY, 15, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#FFD700'; 
    ctx.fill();
    ctx.closePath();

    const orbitColors = ['#4CAF50', '#2196F3', '#FF9800', '#FF5722'];

    for (let i = 0; i < element.shells.length; i++) {
        const shellRadius = 50 + i * 30; 
        const electronCount = element.shells[i];

        ctx.beginPath();
        ctx.arc(centerX, centerY, shellRadius, 0, 2 * Math.PI);
        ctx.strokeStyle = orbitColors[i % orbitColors.length]; 
        ctx.stroke();
        ctx.closePath();

        for (let j = 0; j < electronCount; j++) {
            const angle = (2 * Math.PI / electronCount) * j;
            const electronX = centerX + shellRadius * Math.cos(angle);
            const electronY = centerY + shellRadius * Math.sin(angle);
            
            ctx.beginPath();
            ctx.arc(electronX, electronY, 5, 0, 2 * Math.PI);
            ctx.fillStyle = '#FFFFFF'; 
            ctx.fill();
            ctx.closePath();
        }
    }
}

function populateElements() {
    const elementList = document.getElementById('element-list');
    elementList.innerHTML = '';
    elements.forEach(element => {
        const elementDiv = document.createElement('div');
        elementDiv.className = 'element-box';
        elementDiv.innerHTML = `
            <div><strong>${element.atomicNumber}</strong></div>
            <div><strong>${element.symbol}</strong></div>
            <div>${element.name}</div>
            <div>${element.atomicMass}</div>
        `;
        elementDiv.addEventListener('click', () => showDetails(element, 'element'));
        elementList.appendChild(elementDiv);
    });
}

function populateCompounds() {
    const compoundList = document.getElementById('compound-list');
    compoundList.innerHTML = '';
    compounds.forEach(compound => {
        const div = document.createElement('div');
        div.className = 'compound-item';
        div.innerHTML = `<strong>${compound.name} (${compound.formula})</strong>`;
        div.addEventListener('click', () => showDetails(compound, 'compound'));
        compoundList.appendChild(div);
    });
}

function showDetails(item, type) {
    const detailsContent = document.getElementById('details-content');
    
    const commonDetails = `
        <h3>${item.name}</h3>
        <p><strong>Atomic Number:</strong> ${item.atomicNumber || ''}</p>
        <p><strong>Formula:</strong> ${item.formula || ''}</p>
        <p><strong>Atomic Mass:</strong> ${item.atomicMass || ''}</p>
        ${type === 'element' ? `
        <p><strong>Symbol:</strong> ${item.symbol}</p>
        <p><strong>Valency:</strong> ${item.valency}</p>
        <p><strong>Atomicity:</strong> ${item.atomicity}</p>
        <p><strong>Ion:</strong> ${item.ion}</p>
        <p><strong>Shells:</strong> ${item.shells.join(', ')}</p>
        <p><strong>Protons:</strong> ${item.protons}</p>
        <p><strong>Neutrons:</strong> ${item.neutrons}</p>
        <p><strong>Electrons:</strong> ${item.electrons}</p>
        ` : ''}
        ${type === 'compound' ? `
        <p><strong>Cation:</strong> ${item.cation}</p>
        <p><strong>Anion:</strong> ${item.anion}</p>
        ` : ''}
    `;

    detailsContent.innerHTML = `
        <div class="details-text">
            ${commonDetails}
        </div>
        <div class="details-image">
            <canvas id="atomicCanvas" width="400" height="400"></canvas>
        </div>
    `;

    if (type === 'element') {
        drawAtomicStructure(item, 'atomicCanvas'); 
    }

    const popup = document.getElementById('popup');
    popup.style.display = 'flex'; 
}

document.addEventListener('DOMContentLoaded', () => {
    populateElements();
    populateCompounds();
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        document.getElementById('popup').style.display = 'none';
    });
});

document.getElementById('search').addEventListener('input', searchItems);

function searchItems() {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredElements = elements.filter(e => e.name.toLowerCase().includes(query) || e.symbol.toLowerCase().includes(query));
    const filteredCompounds = compounds.filter(c => c.name.toLowerCase().includes(query) || c.formula.toLowerCase().includes(query));

    const elementList = document.getElementById('element-list');
    elementList.innerHTML = '';
    filteredElements.forEach(element => {
        const elementDiv = document.createElement('div');
        elementDiv.className = 'element-box';
        elementDiv.innerHTML = `
            <div><strong>${element.atomicNumber}</strong></div>
            <div><strong>${element.symbol}</strong></div>
            <div>${element.name}</div>
            <div>${element.atomicMass}</div>
        `;
        elementDiv.addEventListener('click', () => showDetails(element, 'element'));
        elementList.appendChild(elementDiv);
    });

    const compoundList = document.getElementById('compound-list');
    compoundList.innerHTML = '';
    filteredCompounds.forEach(compound => {
        const div = document.createElement('div');
        div.className = 'compound-item';
        div.innerHTML = `<strong>${compound.name} (${compound.formula})</strong>`;
        div.addEventListener('click', () => showDetails(compound, 'compound'));
        compoundList.appendChild(div);
    });
}
function redirectToElements() {
    window.location.href = "./elements.html";
}