function printViableArrays() {
  for (let nineteen = 2; nineteen < 20; nineteen++) {

    for (let eighteen = 2; eighteen < 20; eighteen++) {
      if (nineteen === eighteen || 21 - nineteen === eighteen) {
        continue;
      }

      for (let seventeen = 2; seventeen < 20; seventeen++) {
        if (nineteen === seventeen || 21 - nineteen === seventeen ||
          eighteen === seventeen || 21 - eighteen === seventeen) {
          continue;
        }

        for (let sixteen = 2; sixteen < 20; sixteen++) {
          if (nineteen === sixteen || 21 - nineteen === sixteen ||
            eighteen === sixteen || 21 - eighteen === sixteen ||
            seventeen === sixteen || 21 - seventeen === sixteen) {
            continue;
          }

          let sum_vertex_A = 20 + nineteen + eighteen + seventeen + sixteen;
          if (sum_vertex_A < 52 || 53 < sum_vertex_A) {
            continue;
          }

          let sum_vertex_L = 21 - nineteen + 21 - eighteen + 21 - seventeen + 21 - sixteen + 1;
          if (sum_vertex_L < 52 || 53 < sum_vertex_L) {
            continue;
          }

          for (let fifteen = 2; fifteen < 20; fifteen++) {
            if (nineteen === fifteen || 21 - nineteen === fifteen ||
              eighteen === fifteen || 21 - eighteen === fifteen ||
              seventeen === fifteen || 21 - seventeen === fifteen ||
              sixteen === fifteen || 21 - sixteen === fifteen) {
              continue;
            }

            for (let fourteen = 2; fourteen < 20; fourteen++) {
              if (nineteen === fourteen || 21 - nineteen === fourteen ||
                eighteen === fourteen || 21 - eighteen === fourteen ||
                seventeen === fourteen || 21 - seventeen === fourteen ||
                sixteen === fourteen || 21 - sixteen === fourteen ||
                fifteen === fourteen || 21 - fifteen === fourteen) {
                continue;
              }

              for (let thirteen = 2; thirteen < 20; thirteen++) {
                if (nineteen === thirteen || 21 - nineteen === thirteen ||
                  eighteen === thirteen || 21 - eighteen === thirteen ||
                  seventeen === thirteen || 21 - seventeen === thirteen ||
                  sixteen === thirteen || 21 - sixteen === thirteen ||
                  fifteen === thirteen || 21 - fifteen === thirteen ||
                  fourteen === thirteen || 21 - fourteen === thirteen) {
                  continue;
                }

                let sum_vertex_B = 20 + sixteen + fifteen + fourteen + thirteen;
                if (sum_vertex_B < 52 || 53 < sum_vertex_B) {
                  continue;
                }

                let sum_vertex_J = 21 - sixteen + 21 - fifteen + 21 - fourteen + 21 - thirteen + 1;
                if (sum_vertex_J < 52 || 53 < sum_vertex_J) {
                  continue;
                }

                for (let twelve = 2; twelve < 20; twelve++) {
                  if (nineteen === twelve || 21 - nineteen === twelve ||
                    eighteen === twelve || 21 - eighteen === twelve ||
                    seventeen === twelve || 21 - seventeen === twelve ||
                    sixteen === twelve || 21 - sixteen === twelve ||
                    fifteen === twelve || 21 - fifteen === twelve ||
                    fourteen === twelve || 21 - fourteen === twelve ||
                    thirteen === twelve || 21 - thirteen === twelve) {
                    continue;
                  }

                  let sum_vertex_E = eighteen + seventeen + 21 - fourteen + 21 - thirteen + 21 - twelve;
                  if (sum_vertex_E < 52 || 53 < sum_vertex_E) {
                    continue;
                  }

                  let sum_vertex_H = fourteen + thirteen + twelve + 21 - seventeen + 21 - eighteen;
                  if (sum_vertex_H < 52 || 53 < sum_vertex_H) {
                    continue;
                  }

                  for (let eleven = 2; eleven < 20; eleven++) {
                    if (nineteen === eleven || 21 - nineteen === eleven ||
                      eighteen === eleven || 21 - eighteen === eleven ||
                      seventeen === eleven || 21 - seventeen === eleven ||
                      sixteen === eleven || 21 - sixteen === eleven ||
                      fifteen === eleven || 21 - fifteen === eleven ||
                      fourteen === eleven || 21 - fourteen === eleven ||
                      thirteen === eleven || 21 - thirteen === eleven ||
                      twelve === eleven || 21 - twelve === eleven) {
                      continue;
                    }

                    let sum_vertex_C = 20 + thirteen + twelve + eleven + nineteen;
                    if (sum_vertex_C < 52 || 53 < sum_vertex_C) {
                      continue;
                    }

                    let sum_vertex_D = nineteen + eighteen + eleven + 21 - fifteen + 21 - fourteen;
                    if (sum_vertex_D < 52 || 53 < sum_vertex_D) {
                      continue;
                    }


                    let sum_vertex_F = seventeen + sixteen + fifteen + 21 - eleven + 21 - twelve;
                    if (sum_vertex_F < 52 || 53 < sum_vertex_F) {
                      continue;
                    }

                    let sum_vertex_G = fifteen + fourteen + 21 - eleven + 21 - nineteen + 21 - eighteen;
                    if (sum_vertex_G < 52 || 53 < sum_vertex_G) {
                      continue;
                    }

                    let sum_vertex_I = twelve + eleven + 21 - fifteen + 21 - seventeen + 21 - sixteen;
                    if (sum_vertex_I < 52 || 53 < sum_vertex_I) {
                      continue;
                    }

                    let sum_vertex_K = 21 - nineteen + 21 - thirteen + 21 - twelve + 21 - eleven + 1;
                    if (sum_vertex_K < 52 || 53 < sum_vertex_K) {
                      continue;
                    }

                    console.log(1, 21 - nineteen, 21 - eighteen, 21 - seventeen, 21 - sixteen, 21 - fifteen, 21 - fourteen, 21 - thirteen, 21 - twelve, 21 - eleven,
                      eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, 20);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

printViableArrays();
