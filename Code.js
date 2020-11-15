
function historizeCommandesNonHonorees() {
  historization(
      {
          sourceSheet: "Suivi de production",
          sourceRange: "B34:G34",
          targetSheet: "Commandes non honorées",
          targetRange: "B1:G1"
      }
  );
}
