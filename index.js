function paieska() {
  let paieskosZodis = document.getElementById("paieska").value.toLowerCase();
  let tekstasElementas = document.getElementById("tekstas");
  let tekstas = tekstasElementas.value;

  if (paieskosZodis === "" || tekstas === "") {
    alert("Įveskite žodį paieškai ir tekstą.");
    return;
  }

  let tekstasSuZymemis = tekstas.replace();

  let pazymetiTeksta = tekstasSuZymemis.replace(
    new RegExp(paieskosZodis, "gi"),
    function (match) {
      return <span class="highlight"> match</span>;
    }
  );
  paieska();

  tekstasElementas.innerHTML = pazymetiTeksta;
}
