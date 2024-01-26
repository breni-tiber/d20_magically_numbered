/* jslint devel: true */

function printViableArrays(checkAdditionalD10Condition) {
  let dieSize = 20; // should be in [2, 4, 5, 10, 20]
  let fiveAverages = Math.round(((dieSize + 1) * 5) / 2) - 1;
  let sideMaxThreshold = Math.min(dieSize + 1, 20);
  let sideMinThreshold = 1 + Math.floor(20 / dieSize);
  let viableArrays = 0;

  let nineteen;
  for (
    nineteen = sideMinThreshold;
    nineteen < sideMaxThreshold;
    nineteen += 1
  ) {
    let eighteen;
    for (
      eighteen = sideMinThreshold;
      eighteen < sideMaxThreshold;
      eighteen += 1
    ) {
      if (nineteen === eighteen || dieSize + 1 - nineteen === eighteen) {
        continue;
      }

      let seventeen;
      for (
        seventeen = sideMinThreshold;
        seventeen < sideMaxThreshold;
        seventeen += 1
      ) {
        if (
          nineteen === seventeen ||
          dieSize + 1 - nineteen === seventeen ||
          eighteen === seventeen ||
          dieSize + 1 - eighteen === seventeen
        ) {
          continue;
        }

        let sixteen;
        for (
          sixteen = sideMinThreshold;
          sixteen < sideMaxThreshold;
          sixteen += 1
        ) {
          if (
            nineteen === sixteen ||
            dieSize + 1 - nineteen === sixteen ||
            eighteen === sixteen ||
            dieSize + 1 - eighteen === sixteen ||
            seventeen === sixteen ||
            dieSize + 1 - seventeen === sixteen
          ) {
            continue;
          }

          let sum_vertex_A =
            dieSize + nineteen + eighteen + seventeen + sixteen;
          if (sum_vertex_A < fiveAverages || fiveAverages + 1 < sum_vertex_A) {
            continue;
          }

          let sum_vertex_L =
            dieSize +
            1 -
            nineteen +
            dieSize +
            1 -
            eighteen +
            dieSize +
            1 -
            seventeen +
            dieSize +
            1 -
            sixteen +
            1;
          if (sum_vertex_L < fiveAverages || fiveAverages + 1 < sum_vertex_L) {
            continue;
          }

          let fifteen;
          for (
            fifteen = sideMinThreshold;
            fifteen < sideMaxThreshold;
            fifteen += 1
          ) {
            if (
              nineteen === fifteen ||
              dieSize + 1 - nineteen === fifteen ||
              eighteen === fifteen ||
              dieSize + 1 - eighteen === fifteen ||
              seventeen === fifteen ||
              dieSize + 1 - seventeen === fifteen ||
              sixteen === fifteen ||
              dieSize + 1 - sixteen === fifteen
            ) {
              continue;
            }

            let fourteen;
            for (
              fourteen = sideMinThreshold;
              fourteen < sideMaxThreshold;
              fourteen += 1
            ) {
              if (
                nineteen === fourteen ||
                dieSize + 1 - nineteen === fourteen ||
                eighteen === fourteen ||
                dieSize + 1 - eighteen === fourteen ||
                seventeen === fourteen ||
                dieSize + 1 - seventeen === fourteen ||
                sixteen === fourteen ||
                dieSize + 1 - sixteen === fourteen ||
                fifteen === fourteen ||
                dieSize + 1 - fifteen === fourteen
              ) {
                continue;
              }

              let thirteen;
              for (
                thirteen = sideMinThreshold;
                thirteen < sideMaxThreshold;
                thirteen += 1
              ) {
                if (
                  nineteen === thirteen ||
                  dieSize + 1 - nineteen === thirteen ||
                  eighteen === thirteen ||
                  dieSize + 1 - eighteen === thirteen ||
                  seventeen === thirteen ||
                  dieSize + 1 - seventeen === thirteen ||
                  sixteen === thirteen ||
                  dieSize + 1 - sixteen === thirteen ||
                  fifteen === thirteen ||
                  dieSize + 1 - fifteen === thirteen ||
                  fourteen === thirteen ||
                  dieSize + 1 - fourteen === thirteen
                ) {
                  continue;
                }

                let sum_vertex_B =
                  dieSize + sixteen + fifteen + fourteen + thirteen;
                if (
                  sum_vertex_B < fiveAverages ||
                  fiveAverages + 1 < sum_vertex_B
                ) {
                  continue;
                }

                let sum_vertex_J =
                  dieSize +
                  1 -
                  sixteen +
                  dieSize +
                  1 -
                  fifteen +
                  dieSize +
                  1 -
                  fourteen +
                  dieSize +
                  1 -
                  thirteen +
                  1;
                if (
                  sum_vertex_J < fiveAverages ||
                  fiveAverages + 1 < sum_vertex_J
                ) {
                  continue;
                }

                let twelve;
                for (
                  twelve = sideMinThreshold;
                  twelve < sideMaxThreshold;
                  twelve += 1
                ) {
                  if (
                    nineteen === twelve ||
                    dieSize + 1 - nineteen === twelve ||
                    eighteen === twelve ||
                    dieSize + 1 - eighteen === twelve ||
                    seventeen === twelve ||
                    dieSize + 1 - seventeen === twelve ||
                    sixteen === twelve ||
                    dieSize + 1 - sixteen === twelve ||
                    fifteen === twelve ||
                    dieSize + 1 - fifteen === twelve ||
                    fourteen === twelve ||
                    dieSize + 1 - fourteen === twelve ||
                    thirteen === twelve ||
                    dieSize + 1 - thirteen === twelve
                  ) {
                    continue;
                  }

                  let sum_vertex_E =
                    eighteen +
                    seventeen +
                    dieSize +
                    1 -
                    fourteen +
                    dieSize +
                    1 -
                    thirteen +
                    dieSize +
                    1 -
                    twelve;
                  if (
                    sum_vertex_E < fiveAverages ||
                    fiveAverages + 1 < sum_vertex_E
                  ) {
                    continue;
                  }

                  let sum_vertex_H =
                    fourteen +
                    thirteen +
                    twelve +
                    dieSize +
                    1 -
                    seventeen +
                    dieSize +
                    1 -
                    eighteen;
                  if (
                    sum_vertex_H < fiveAverages ||
                    fiveAverages + 1 < sum_vertex_H
                  ) {
                    continue;
                  }

                  let eleven;
                  for (
                    eleven = sideMinThreshold;
                    eleven < sideMaxThreshold;
                    eleven += 1
                  ) {
                    if (
                      nineteen === eleven ||
                      dieSize + 1 - nineteen === eleven ||
                      eighteen === eleven ||
                      dieSize + 1 - eighteen === eleven ||
                      seventeen === eleven ||
                      dieSize + 1 - seventeen === eleven ||
                      sixteen === eleven ||
                      dieSize + 1 - sixteen === eleven ||
                      fifteen === eleven ||
                      dieSize + 1 - fifteen === eleven ||
                      fourteen === eleven ||
                      dieSize + 1 - fourteen === eleven ||
                      thirteen === eleven ||
                      dieSize + 1 - thirteen === eleven ||
                      twelve === eleven ||
                      dieSize + 1 - twelve === eleven
                    ) {
                      continue;
                    }

                    // These vertices are mirrors of each other:
                    // AL BJ EH || CK DG FI

                    let sum_vertex_C =
                      dieSize + thirteen + twelve + eleven + nineteen;
                    if (
                      sum_vertex_C < fiveAverages ||
                      fiveAverages + 1 < sum_vertex_C
                    ) {
                      continue;
                    }

                    let sum_vertex_K =
                      dieSize +
                      1 -
                      nineteen +
                      dieSize +
                      1 -
                      thirteen +
                      dieSize +
                      1 -
                      twelve +
                      dieSize +
                      1 -
                      eleven +
                      1;
                    if (
                      sum_vertex_K < fiveAverages ||
                      fiveAverages + 1 < sum_vertex_K
                    ) {
                      continue;
                    }

                    let sum_vertex_D =
                      nineteen +
                      eighteen +
                      eleven +
                      dieSize +
                      1 -
                      fifteen +
                      dieSize +
                      1 -
                      fourteen;
                    if (
                      sum_vertex_D < fiveAverages ||
                      fiveAverages + 1 < sum_vertex_D
                    ) {
                      continue;
                    }

                    let sum_vertex_G =
                      fifteen +
                      fourteen +
                      dieSize +
                      1 -
                      eleven +
                      dieSize +
                      1 -
                      nineteen +
                      dieSize +
                      1 -
                      eighteen;
                    if (
                      sum_vertex_G < fiveAverages ||
                      fiveAverages + 1 < sum_vertex_G
                    ) {
                      continue;
                    }

                    let sum_vertex_F =
                      seventeen +
                      sixteen +
                      fifteen +
                      dieSize +
                      1 -
                      eleven +
                      dieSize +
                      1 -
                      twelve;
                    if (
                      sum_vertex_F < fiveAverages ||
                      fiveAverages + 1 < sum_vertex_F
                    ) {
                      continue;
                    }

                    let sum_vertex_I =
                      twelve +
                      eleven +
                      dieSize +
                      1 -
                      fifteen +
                      dieSize +
                      1 -
                      seventeen +
                      dieSize +
                      1 -
                      sixteen;
                    if (
                      sum_vertex_I < fiveAverages ||
                      fiveAverages + 1 < sum_vertex_I
                    ) {
                      continue;
                    }

                    if (checkAdditionalD10Condition) {
                      let d10_sum_vertex_A =
                        10 +
                        (nineteen === 10 ? 10 : nineteen % 10) +
                        (eighteen === 10 ? 10 : eighteen % 10) +
                        (seventeen === 10 ? 10 : seventeen % 10) +
                        (sixteen === 10 ? 10 : sixteen % 10);

                      let d10_sum_vertex_B =
                        10 +
                        (sixteen === 10 ? 10 : sixteen % 10) +
                        (fifteen === 10 ? 10 : fifteen % 10) +
                        (fourteen === 10 ? 10 : fourteen % 10) +
                        (thirteen === 10 ? 10 : thirteen % 10);

                      let d10_sum_vertex_C =
                        10 +
                        (thirteen === 10 ? 10 : thirteen % 10) +
                        (twelve === 10 ? 10 : twelve % 10) +
                        (eleven === 10 ? 10 : eleven % 10) +
                        (nineteen === 10 ? 10 : nineteen % 10);

                      let d10_sum_vertex_D =
                        (nineteen === 10 ? 10 : nineteen % 10) +
                        (eighteen === 10 ? 10 : eighteen % 10) +
                        (eleven === 10 ? 10 : eleven % 10) +
                        (dieSize + 1 - fifteen === 10
                          ? 10
                          : (dieSize + 1 - fifteen) % 10) +
                        (dieSize + 1 - fourteen === 10
                          ? 10
                          : (dieSize + 1 - fourteen) % 10);

                      let d10_sum_vertex_E =
                        (eighteen === 10 ? 10 : eighteen % 10) +
                        (seventeen === 10 ? 10 : seventeen % 10) +
                        (dieSize + 1 - fourteen === 10
                          ? 10
                          : (dieSize + 1 - fourteen) % 10) +
                        (dieSize + 1 - thirteen === 10
                          ? 10
                          : (dieSize + 1 - thirteen) % 10) +
                        (dieSize + 1 - twelve === 10
                          ? 10
                          : (dieSize + 1 - twelve) % 10);

                      let d10_sum_vertex_F =
                        (seventeen === 10 ? 10 : seventeen % 10) +
                        (sixteen === 10 ? 10 : sixteen % 10) +
                        (fifteen === 10 ? 10 : fifteen % 10) +
                        (eleven === 10 ? 10 : eleven % 10) +
                        (twelve === 10 ? 10 : twelve % 10);

                      let d10_sum_vertex_G =
                        (fifteen === 10 ? 10 : fifteen % 10) +
                        (fourteen === 10 ? 10 : fourteen % 10) +
                        (dieSize + 1 - eleven === 10
                          ? 10
                          : (dieSize + 1 - eleven) % 10) +
                        (dieSize + 1 - nineteen === 10
                          ? 10
                          : (dieSize + 1 - nineteen) % 10) +
                        (dieSize + 1 - eighteen === 10
                          ? 10
                          : (dieSize + 1 - eighteen) % 10);

                      let d10_sum_vertex_H =
                        (fourteen === 10 ? 10 : fourteen % 10) +
                        (thirteen === 10 ? 10 : thirteen % 10) +
                        (twelve === 10 ? 10 : twelve % 10) +
                        (dieSize + 1 - seventeen === 10
                          ? 10
                          : (dieSize + 1 - seventeen) % 10) +
                        (dieSize + 1 - eighteen === 10
                          ? 10
                          : (dieSize + 1 - eighteen) % 10);

                      let d10_sum_vertex_I =
                        (dieSize + 1 - twelve === 10
                          ? 10
                          : (dieSize + 1 - twelve) % 10) +
                        (dieSize + 1 - eleven === 10
                          ? 10
                          : (dieSize + 1 - eleven) % 10) +
                        (dieSize + 1 - fifteen === 10
                          ? 10
                          : (dieSize + 1 - fifteen) % 10) +
                        (dieSize + 1 - seventeen === 10
                          ? 10
                          : (dieSize + 1 - seventeen) % 10) +
                        (dieSize + 1 - sixteen === 10
                          ? 10
                          : (dieSize + 1 - sixteen) % 10);

                      let d10_sum_vertex_J =
                        1 +
                        (dieSize + 1 - sixteen === 10
                          ? 10
                          : (dieSize + 1 - sixteen) % 10) +
                        (dieSize + 1 - fifteen === 10
                          ? 10
                          : (dieSize + 1 - fifteen) % 10) +
                        (dieSize + 1 - fourteen === 10
                          ? 10
                          : (dieSize + 1 - fourteen) % 10) +
                        (dieSize + 1 - thirteen === 10
                          ? 10
                          : (dieSize + 1 - thirteen) % 10);

                      let d10_sum_vertex_K =
                        1 +
                        (dieSize + 1 - nineteen === 10
                          ? 10
                          : (dieSize + 1 - nineteen) % 10) +
                        (dieSize + 1 - thirteen === 10
                          ? 10
                          : (dieSize + 1 - thirteen) % 10) +
                        (dieSize + 1 - twelve === 10
                          ? 10
                          : (dieSize + 1 - twelve) % 10) +
                        (dieSize + 1 - eleven === 10
                          ? 10
                          : (dieSize + 1 - eleven) % 10);

                      let d10_sum_vertex_L =
                        1 +
                        (dieSize + 1 - nineteen === 10
                          ? 10
                          : (dieSize + 1 - nineteen) % 10) +
                        (dieSize + 1 - eighteen === 10
                          ? 10
                          : (dieSize + 1 - eighteen) % 10) +
                        (dieSize + 1 - seventeen === 10
                          ? 10
                          : (dieSize + 1 - seventeen) % 10) +
                        (dieSize + 1 - sixteen === 10
                          ? 10
                          : (dieSize + 1 - sixteen) % 10);

                      let permissableD10Sums = [22, 23, 32, 33];

                      if (
                        permissableD10Sums.find(
                          (elem) => elem === d10_sum_vertex_A
                        ) &&
                        permissableD10Sums.find(
                          (elem) => elem === d10_sum_vertex_B
                        ) &&
                        permissableD10Sums.find(
                          (elem) => elem === d10_sum_vertex_C
                        ) &&
                        permissableD10Sums.find(
                          (elem) => elem === d10_sum_vertex_D
                        ) &&
                        permissableD10Sums.find(
                          (elem) => elem === d10_sum_vertex_E
                        ) &&
                        permissableD10Sums.find(
                          (elem) => elem === d10_sum_vertex_F
                        ) &&
                        permissableD10Sums.find(
                          (elem) => elem === d10_sum_vertex_G
                        ) &&
                        permissableD10Sums.find(
                          (elem) => elem === d10_sum_vertex_H
                        ) &&
                        permissableD10Sums.find(
                          (elem) => elem === d10_sum_vertex_I
                        ) &&
                        permissableD10Sums.find(
                          (elem) => elem === d10_sum_vertex_J
                        ) &&
                        permissableD10Sums.find(
                          (elem) => elem === d10_sum_vertex_K
                        ) &&
                        permissableD10Sums.find(
                          (elem) => elem === d10_sum_vertex_L
                        )
                      ) {
                        let d10AllSums = [
                          d10_sum_vertex_A,
                          d10_sum_vertex_B,
                          d10_sum_vertex_C,
                          d10_sum_vertex_D,
                          d10_sum_vertex_E,
                          d10_sum_vertex_F,
                          d10_sum_vertex_G,
                          d10_sum_vertex_H,
                          d10_sum_vertex_I,
                          d10_sum_vertex_J,
                          d10_sum_vertex_K,
                          d10_sum_vertex_L
                        ];

                        console.log(
                          "___",
                          d10AllSums.sort(),
                          1,
                          dieSize + 1 - nineteen,
                          dieSize + 1 - eighteen,
                          dieSize + 1 - seventeen,
                          dieSize + 1 - sixteen,
                          dieSize + 1 - fifteen,
                          dieSize + 1 - fourteen,
                          dieSize + 1 - thirteen,
                          dieSize + 1 - twelve,
                          dieSize + 1 - eleven,
                          eleven,
                          twelve,
                          thirteen,
                          fourteen,
                          fifteen,
                          sixteen,
                          seventeen,
                          eighteen,
                          nineteen,
                          dieSize
                        );
                      }
                    } else {
                      console.log(
                        1,
                        dieSize + 1 - nineteen,
                        dieSize + 1 - eighteen,
                        dieSize + 1 - seventeen,
                        dieSize + 1 - sixteen,
                        dieSize + 1 - fifteen,
                        dieSize + 1 - fourteen,
                        dieSize + 1 - thirteen,
                        dieSize + 1 - twelve,
                        dieSize + 1 - eleven,
                        eleven,
                        twelve,
                        thirteen,
                        fourteen,
                        fifteen,
                        sixteen,
                        seventeen,
                        eighteen,
                        nineteen,
                        dieSize
                      );
                      viableArrays += 1;
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

  console.log("Found", viableArrays, "Arrays fulfilling the criteria.");
}

printViableArrays(false);
