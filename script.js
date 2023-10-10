let uklad = [["symbol", "nazwa", "liczba atomowa", "masa atomowa", "powłoki elektronowe", "elektroujemność"],
["H","wodór",1, 1.008, "K1",2.1],
["He","hel",2, 4.003, "K2", "(brak)"],
["Li","lit",3, 6.941, "K2L1",1.0],
["Be","beryl",4, 9.012, "K2L2",1.5],
["B","bor",5, 10.81, "K2L3",2.0],
["C","węgiel",6, 12.011, "K2L4",2.5],
["N","azot",7, 14.007, "K2L5",3.0],
["O","tlen",8, 15.999, "K2L6",3.5],
["F","fluor",9, 18.998, "K2L7",4.0],
["Ne","neon",10, 20.180, "K2L8","(brak)"],
["Na","sód",11, 22.990, "K2L8M1",0.9],
["Mg","magnez",12, 24.305, "K2L8M2",1.2],
["Al","glin",13, 26.982, "K2L8M3",1.5],
["Si","krzem",14, 28.085, "K2L8M4",1.8],
["P","fosfor",15, 30.974, "K2L8M5",2.1],
["S","siarka",16, 32.06, "K2L8M6",2.5],
["Cl","chlor",17, 35.45, "K2L8M7",3.0],
["Ar","argon",18, 39.95, "K2L8M8","(brak)"],
["K","potas",19, 39.098, "K2L8M9",0.9],
["Ca","wapń",20, 40.078, "K2L8M10",1.0],
["Ga","gal",31, 69.723, "K2L8M18N3",1.6],
["Ge","german",32, 72.61, "K2L8M18N4",1.8],
["As","arsen",33, 74.922, "K2L8M18N5",2.0],
["Se","selen",34, 78.96, "K2L8M18N6",2.4],
["Br","brom",35, 79.904, "K2L8M18N7",2.8],
["Kr","krypton",36, 83.798, "K2L8M18N8","(brak)"],
["Rb","rubid",37, 85.468, "K2L8M18N8O1",0.8],
["Sr","stront",38, 87.62, "K2L8M18N8O2",1.0],
["In","ind",49, 114.818, "K2L8M18N18O3",1.7],
["Sn","cyna",50, 118.71	, "K2L8M18N18O4",1.8],
["Sb","antymon",51, 121.76, "K2L8M18N18O5",1.9],
["Te","tellur",52, 127.6, "K2L8M18N18O6",2.1],
["I","jod",53, 126.904, "K2L8M18N18O7",2.5],
["Xe","ksenon",54, 131.293, "K2L8M18N18O8","(brak)"],
["Cs","cez",55, 132.905, "K2L8M18N18O8P1",0.7],
["Ba","bar",56, 137.327, "K2L8M18N18O8P2",0.9],
["Ti","tal",81, 204.383, "K2L8M18N32O18P3",1.8],
["Pb","ołów",82, 207.2	, "K2L8M18N32O18P4",1.8],
["Bi","bizmut",83, 208.98, "K2L8M18N32O18P5",1.9],
["Po","polon",84, 208.982, "K2L8M18N32O18P6",2.0],
["At","astat",85, 209.987, "K2L8M18N32O18P7",2.2],
["Rn","radon",86, 222.018, "K2L8M18N32O18P8","(brak)"],
["Fr","frans",87, 223.02, "K2L8M18N18O8P8Q1",0.7],
["Ra","rad",88, 226.025, "K2L8M18N18O8P8Q2",0.9],
["Nh","nihonium",113, 284, "K2L8M18N32O32P18Q3","(nieznana)"],
["Fl","flerovium",114, 289	, "K2L8M18N32O32P18Q4","(nieznana)"],
["Mc","moscovium",115, 288, "K2L8M18N32O32P18Q5","(nieznana)"],
["Lv","livermorium",116, 292, "K2L8M18N32O32P18Q6","(nieznana)"],
["Ts","tennessine",117, 294, "K2L8M18N32O32P18Q7","(nieznana)"],
["Og","oganesson",118, 294, "K2L8M18N32O32P18Q8","(nieznana)"]

]
document.getElementById("demo").innerHTML = "Kliknij przycisk powyżej"
function myFunction() {
	
	let liczba_atomowa = prompt("Podaj liczbę atomową, symbol lub nazwę pierwiastka z grupy głównej.")
	for(let i = 0; i <= 118; i++){
	if(liczba_atomowa == uklad[i][2] || liczba_atomowa == uklad[i][0] || liczba_atomowa == uklad[i][1]){
	document.getElementById("demo").innerHTML = `Symbol pierwiastka to <span>${uklad[i][0]}</span>.<br> Jego nazwa to <span>${uklad[i][1]}</span>. <br>
	Liczba atomowa to <span>${uklad[i][2]}</span>. <br> Masa atomowa to <span>${uklad[i][3]}</span> u. <br> Powłoki elektronowe to <span>${uklad[i][4]}</span>.
	<br> Jego elektroujemność to <span>${uklad[i][5]}</span>.`
	break
		}
	else if(liczba_atomowa > 20 && liczba_atomowa < 31){
	document.getElementById("demo").innerHTML = "Pierwiastek poza zasięgiem programu."
	break
	}
	else if(liczba_atomowa > 38 && liczba_atomowa < 49){
	document.getElementById("demo").innerHTML = "Pierwiastek poza zasięgiem programu."
	break
	}
	else if(liczba_atomowa > 56 && liczba_atomowa < 81){
	document.getElementById("demo").innerHTML = "Pierwiastek poza zasięgiem programu."
	break
	}
	else{
	document.getElementById("demo").innerHTML = "Pierwiastek poza zasięgiem programu."
	}

}
}

