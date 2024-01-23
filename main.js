/* jslint devel: true */

function printViableArrays(checkAdditionalD10Condition) {
  let nineteen;
  for (nineteen = 2; nineteen < 20; nineteen += 1) {

    let eighteen;
    for (eighteen = 2; eighteen < 20; eighteen += 1) {
      if (nineteen === eighteen || 21 - nineteen === eighteen) {
        continue;
      }

      let seventeen;
      for (seventeen = 2; seventeen < 20; seventeen += 1) {
        if (nineteen === seventeen || 21 - nineteen === seventeen ||
          eighteen === seventeen || 21 - eighteen === seventeen) {
          continue;
        }

        let sixteen;
        for (sixteen = 2; sixteen < 20; sixteen += 1) {
          if (nineteen === sixteen || 21 - nineteen === sixteen ||
            eighteen === sixteen || 21 - eighteen === sixteen ||
            seventeen === sixteen || 21 - seventeen === sixteen) {
            continue;
          }

          let sum_vertex_A = 20 + nineteen + eighteen + seventeen + sixteen;
          if (sum_vertex_A < 52 || 53 < sum_vertex_A) {
            continue;
          }

          let sum_vertex_L = 21 - nineteen + 21 - eighteen + 21 - seventeen +
            21 - sixteen + 1;
          if (sum_vertex_L < 52 || 53 < sum_vertex_L) {
            continue;
          }

          let fifteen;
          for (fifteen = 2; fifteen < 20; fifteen += 1) {
            if (nineteen === fifteen || 21 - nineteen === fifteen ||
              eighteen === fifteen || 21 - eighteen === fifteen ||
              seventeen === fifteen || 21 - seventeen === fifteen ||
              sixteen === fifteen || 21 - sixteen === fifteen) {
              continue;
            }

            let fourteen;
            for (fourteen = 2; fourteen < 20; fourteen += 1) {
              if (nineteen === fourteen || 21 - nineteen === fourteen ||
                eighteen === fourteen || 21 - eighteen === fourteen ||
                seventeen === fourteen || 21 - seventeen === fourteen ||
                sixteen === fourteen || 21 - sixteen === fourteen ||
                fifteen === fourteen || 21 - fifteen === fourteen) {
                continue;
              }

              let thirteen;
              for (thirteen = 2; thirteen < 20; thirteen += 1) {
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

                let sum_vertex_J = 21 - sixteen + 21 - fifteen + 21 - fourteen +
                  21 - thirteen + 1;
                if (sum_vertex_J < 52 || 53 < sum_vertex_J) {
                  continue;
                }

                let twelve;
                for (twelve = 2; twelve < 20; twelve += 1) {
                  if (nineteen === twelve || 21 - nineteen === twelve ||
                    eighteen === twelve || 21 - eighteen === twelve ||
                    seventeen === twelve || 21 - seventeen === twelve ||
                    sixteen === twelve || 21 - sixteen === twelve ||
                    fifteen === twelve || 21 - fifteen === twelve ||
                    fourteen === twelve || 21 - fourteen === twelve ||
                    thirteen === twelve || 21 - thirteen === twelve) {
                    continue;
                  }

                  let sum_vertex_E = eighteen + seventeen + 21 - fourteen +
                    21 - thirteen + 21 - twelve;
                  if (sum_vertex_E < 52 || 53 < sum_vertex_E) {
                    continue;
                  }

                  let sum_vertex_H = fourteen + thirteen + twelve +
                    21 - seventeen + 21 - eighteen;
                  if (sum_vertex_H < 52 || 53 < sum_vertex_H) {
                    continue;
                  }

                  let eleven;
                  for (eleven = 2; eleven < 20; eleven += 1) {
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

                    // These vertices are mirrors of each other:
                    // AL BJ EH || CK DG FI

                    let sum_vertex_C = 20 + thirteen + twelve + eleven +
                      nineteen;
                    if (sum_vertex_C < 52 || 53 < sum_vertex_C) {
                      continue;
                    }

                    let sum_vertex_K = 21 - nineteen + 21 - thirteen +
                      21 - twelve + 21 - eleven + 1;
                    if (sum_vertex_K < 52 || 53 < sum_vertex_K) {
                      continue;
                    }

                    let sum_vertex_D = nineteen + eighteen + eleven +
                      21 - fifteen + 21 - fourteen;
                    if (sum_vertex_D < 52 || 53 < sum_vertex_D) {
                      continue;
                    }

                    let sum_vertex_G = fifteen + fourteen + 21 - eleven +
                      21 - nineteen + 21 - eighteen;
                    if (sum_vertex_G < 52 || 53 < sum_vertex_G) {
                      continue;
                    }

                    let sum_vertex_F = seventeen + sixteen + fifteen +
                      21 - eleven + 21 - twelve;
                    if (sum_vertex_F < 52 || 53 < sum_vertex_F) {
                      continue;
                    }

                    let sum_vertex_I = twelve + eleven + 21 - fifteen +
                      21 - seventeen + 21 - sixteen;
                    if (sum_vertex_I < 52 || 53 < sum_vertex_I) {
                      continue;
                    }

                    if (checkAdditionalD10Condition) {
                      let d10_sum_vertex_A = 10 +
                        (nineteen === 10 ? 10 : nineteen % 10) +
                        (eighteen === 10 ? 10 : eighteen % 10) +
                        (seventeen === 10 ? 10 : seventeen % 10) +
                        (sixteen === 10 ? 10 : sixteen % 10);

                      let d10_sum_vertex_B = 10 +
                        (sixteen === 10 ? 10 : sixteen % 10) +
                        (fifteen === 10 ? 10 : fifteen % 10) +
                        (fourteen === 10 ? 10 : fourteen % 10) +
                        (thirteen === 10 ? 10 : thirteen % 10);

                      let d10_sum_vertex_C = 10 +
                        (thirteen === 10 ? 10 : thirteen % 10) +
                        (twelve === 10 ? 10 : twelve % 10) +
                        (eleven === 10 ? 10 : eleven % 10) +
                        (nineteen === 10 ? 10 : nineteen % 10);

                      let d10_sum_vertex_D =
                        (nineteen === 10 ? 10 : nineteen % 10) +
                        (eighteen === 10 ? 10 : eighteen % 10) +
                        (eleven === 10 ? 10 : eleven % 10) +
                        (21 - fifteen === 10 ? 10 : (21 - fifteen) % 10) +
                        (21 - fourteen === 10 ? 10 : (21 - fourteen) % 10);

                      let d10_sum_vertex_E =
                        (eighteen === 10 ? 10 : eighteen % 10) +
                        (seventeen === 10 ? 10 : seventeen % 10) +
                        (21 - fourteen === 10 ? 10 : (21 - fourteen) % 10) +
                        (21 - thirteen === 10 ? 10 : (21 - thirteen) % 10) +
                        (21 - twelve === 10 ? 10 : (21 - twelve) % 10);

                      let d10_sum_vertex_F =
                        (seventeen === 10 ? 10 : seventeen % 10) +
                        (sixteen === 10 ? 10 : sixteen % 10) +
                        (fifteen === 10 ? 10 : fifteen % 10) +
                        (eleven === 10 ? 10 : eleven % 10) +
                        (twelve === 10 ? 10 : twelve % 10);

                      let d10_sum_vertex_G =
                        (fifteen === 10 ? 10 : fifteen % 10) +
                        (fourteen === 10 ? 10 : fourteen % 10) +
                        (21 - eleven === 10 ? 10 : (21 - eleven) % 10) +
                        (21 - nineteen === 10 ? 10 : (21 - nineteen) % 10) +
                        (21 - eighteen === 10 ? 10 : (21 - eighteen) % 10);

                      let d10_sum_vertex_H =
                        (fourteen === 10 ? 10 : fourteen % 10) +
                        (thirteen === 10 ? 10 : thirteen % 10) +
                        (twelve === 10 ? 10 : twelve % 10) +
                        (21 - seventeen === 10 ? 10 : (21 - seventeen) % 10) +
                        (21 - eighteen === 10 ? 10 : (21 - eighteen) % 10);

                      let d10_sum_vertex_I =
                        (21 - twelve === 10 ? 10 : (21 - twelve) % 10) +
                        (21 - eleven === 10 ? 10 : (21 - eleven) % 10) +
                        (21 - fifteen === 10 ? 10 : (21 - fifteen) % 10) +
                        (21 - seventeen === 10 ? 10 : (21 - seventeen) % 10) +
                        (21 - sixteen === 10 ? 10 : (21 - sixteen) % 10);

                      let d10_sum_vertex_J = 1 +
                        (21 - sixteen === 10 ? 10 : (21 - sixteen) % 10) +
                        (21 - fifteen === 10 ? 10 : (21 - fifteen) % 10) +
                        (21 - fourteen === 10 ? 10 : (21 - fourteen) % 10) +
                        (21 - thirteen === 10 ? 10 : (21 - thirteen) % 10);

                      let d10_sum_vertex_K = 1 +
                        (21 - nineteen === 10 ? 10 : (21 - nineteen) % 10) +
                        (21 - thirteen === 10 ? 10 : (21 - thirteen) % 10) +
                        (21 - twelve === 10 ? 10 : (21 - twelve) % 10) +
                        (21 - eleven === 10 ? 10 : (21 - eleven) % 10);

                      let d10_sum_vertex_L = 1 +
                        (21 - nineteen === 10 ? 10 : (21 - nineteen) % 10) +
                        (21 - eighteen === 10 ? 10 : (21 - eighteen) % 10) +
                        (21 - seventeen === 10 ? 10 : (21 - seventeen) % 10) +
                        (21 - sixteen === 10 ? 10 : (21 - sixteen) % 10);


                      let permissableD10Sums = [22, 23, 32, 33];

                      if (permissableD10Sums.find((elem) => elem ===
                          d10_sum_vertex_A) &&
                        permissableD10Sums.find((elem) => elem ===
                          d10_sum_vertex_B) &&
                        permissableD10Sums.find((elem) => elem ===
                          d10_sum_vertex_C) &&
                        permissableD10Sums.find((elem) => elem ===
                          d10_sum_vertex_D) &&
                        permissableD10Sums.find((elem) => elem ===
                          d10_sum_vertex_E) &&
                        permissableD10Sums.find((elem) => elem ===
                          d10_sum_vertex_F) &&
                        permissableD10Sums.find((elem) => elem ===
                          d10_sum_vertex_G) &&
                        permissableD10Sums.find((elem) => elem ===
                          d10_sum_vertex_H) &&
                        permissableD10Sums.find((elem) => elem ===
                          d10_sum_vertex_I) &&
                        permissableD10Sums.find((elem) => elem ===
                          d10_sum_vertex_J) &&
                        permissableD10Sums.find((elem) => elem ===
                          d10_sum_vertex_K) &&
                        permissableD10Sums.find((elem) => elem ===
                          d10_sum_vertex_L)) {

                        let d10AllSums = [
                          d10_sum_vertex_A, d10_sum_vertex_B, d10_sum_vertex_C,
                          d10_sum_vertex_D, d10_sum_vertex_E, d10_sum_vertex_F,
                          d10_sum_vertex_G, d10_sum_vertex_H, d10_sum_vertex_I,
                          d10_sum_vertex_J, d10_sum_vertex_K, d10_sum_vertex_L
                        ];

                        console.log("___", d10AllSums.sort(),
                          1, 21 - nineteen, 21 - eighteen, 21 - seventeen,
                          21 - sixteen, 21 - fifteen, 21 - fourteen,
                          21 - thirteen, 21 - twelve, 21 - eleven, eleven,
                          twelve, thirteen, fourteen, fifteen, sixteen,
                          seventeen, eighteen, nineteen, 20
                        );

                      }
                    } else {
                      console.log(1, 21 - nineteen, 21 - eighteen,
                        21 - seventeen, 21 - sixteen, 21 - fifteen,
                        21 - fourteen, 21 - thirteen, 21 - twelve,
                        21 - eleven, eleven, twelve, thirteen, fourteen,
                        fifteen, sixteen, seventeen, eighteen, nineteen, 20);
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
}

printViableArrays(false);
