/* jslint devel: true */

function printViableArrays(checkAdditionalD10Condition) {
  const dieSize = 20; // should be in [2, 4, 5, 10, 20]
  const fiveAverages = Math.round(((dieSize + 1) * 5) / 2) - 1;
  const sideMaxThreshold = Math.min(dieSize + 1, 20);
  const sideMinThreshold = 1 + Math.floor(20 / dieSize);
  let viableArrays = 0;
  let a = [dieSize, 1];

  for (
    a[19] = sideMinThreshold; a[19] < sideMaxThreshold; a[19] += 1
  ) {
    a[5] = dieSize + 1 - a[19];
    for (
      a[18] = sideMinThreshold; a[18] < sideMaxThreshold; a[18] += 1
    ) {
      if (a[19] === a[18] || a[5] === a[18]) {
        continue;
      }
      a[4] = dieSize + 1 - a[18];
      for (
        a[17] = sideMinThreshold; a[17] < sideMaxThreshold; a[17] += 1
      ) {
        if (
          a[19] === a[17] ||
          a[5] === a[17] ||
          a[18] === a[17] ||
          a[4] === a[17]
        ) {
          continue;
        }
        a[3] = dieSize + 1 - a[17];
        for (
          a[16] = sideMinThreshold; a[16] < sideMaxThreshold; a[16] += 1
        ) {
          if (
            a[19] === a[16] ||
            a[5] === a[16] ||
            a[18] === a[16] ||
            a[4] === a[16] ||
            a[17] === a[16] ||
            a[3] === a[16]
          ) {
            continue;
          }

          a[2] = dieSize + 1 - a[16];

          let sum_vertex_A = a[0] + a[19] + a[18] + a[17] + a[16];
          if (sum_vertex_A < fiveAverages || fiveAverages + 1 < sum_vertex_A) {
            continue;
          }

          let sum_vertex_L = a[5] + a[4] + a[3] + a[2] + a[1];
          if (sum_vertex_L < fiveAverages || fiveAverages + 1 < sum_vertex_L) {
            continue;
          }

          for (
            a[15] = sideMinThreshold; a[15] < sideMaxThreshold; a[15] += 1
          ) {
            if (
              a[19] === a[15] ||
              a[5] === a[15] ||
              a[18] === a[15] ||
              a[4] === a[15] ||
              a[17] === a[15] ||
              a[3] === a[15] ||
              a[16] === a[15] ||
              a[2] === a[15]
            ) {
              continue;
            }
            a[10] = dieSize + 1 - a[15];
            for (
              a[14] = sideMinThreshold; a[14] < sideMaxThreshold; a[14] += 1
            ) {
              if (
                a[19] === a[14] ||
                a[5] === a[14] ||
                a[18] === a[14] ||
                a[4] === a[14] ||
                a[17] === a[14] ||
                a[3] === a[14] ||
                a[16] === a[14] ||
                a[2] === a[14] ||
                a[15] === a[14] ||
                a[10] === a[14]
              ) {
                continue;
              }
              a[9] = dieSize + 1 - a[14];
              for (
                a[13] = sideMinThreshold; a[13] < sideMaxThreshold; a[13] += 1
              ) {
                if (
                  a[19] === a[13] ||
                  a[5] === a[13] ||
                  a[18] === a[13] ||
                  a[4] === a[13] ||
                  a[17] === a[13] ||
                  a[3] === a[13] ||
                  a[16] === a[13] ||
                  a[2] === a[13] ||
                  a[15] === a[13] ||
                  a[10] === a[13] ||
                  a[14] === a[13] ||
                  a[9] === a[13]

                ) {
                  continue;
                }
                a[8] = dieSize + 1 - a[13];
                let sum_vertex_B = a[0] + a[16] + a[15] + a[14] + a[13];
                if (
                  sum_vertex_B < fiveAverages ||
                  fiveAverages + 1 < sum_vertex_B
                ) {
                  continue;
                }

                let sum_vertex_J = a[2] + a[10] + a[9] + a[8] + a[1];
                if (
                  sum_vertex_J < fiveAverages ||
                  fiveAverages + 1 < sum_vertex_J
                ) {
                  continue;
                }

                for (
                  a[12] = sideMinThreshold; a[12] < sideMaxThreshold; a[12] += 1
                ) {
                  if (
                    a[19] === a[12] ||
                    a[5] === a[12] ||
                    a[18] === a[12] ||
                    a[4] === a[12] ||
                    a[17] === a[12] ||
                    a[3] === a[12] ||
                    a[16] === a[12] ||
                    a[2] === a[12] ||
                    a[15] === a[12] ||
                    a[10] === a[12] ||
                    a[14] === a[12] ||
                    a[9] === a[12] ||
                    a[13] === a[12] ||
                    a[8] === a[12]
                  ) {
                    continue;
                  }
                  a[7] = dieSize + 1 - a[12];

                  let sum_vertex_E = a[18] + a[17] + a[9] + a[8] + a[7];
                  if (
                    sum_vertex_E < fiveAverages ||
                    fiveAverages + 1 < sum_vertex_E
                  ) {
                    continue;
                  }

                  let sum_vertex_H = a[14] + a[13] + a[12] + a[3] + a[4];
                  if (
                    sum_vertex_H < fiveAverages ||
                    fiveAverages + 1 < sum_vertex_H
                  ) {
                    continue;
                  }

                  for (
                    a[11] = sideMinThreshold; a[11] < sideMaxThreshold; a[11] += 1
                  ) {
                    if (
                      a[19] === a[11] ||
                      a[5] === a[11] ||
                      a[18] === a[11] ||
                      a[4] === a[11] ||
                      a[17] === a[11] ||
                      a[3] === a[11] ||
                      a[16] === a[11] ||
                      a[2] === a[11] ||
                      a[15] === a[11] ||
                      a[10] === a[11] ||
                      a[14] === a[11] ||
                      a[9] === a[11] ||
                      a[13] === a[11] ||
                      a[8] === a[11] ||
                      a[12] === a[11] ||
                      a[7] === a[11]
                    ) {
                      continue;
                    }
                    a[6] = dieSize + 1 - a[11];

                    // These vertices are mirrors of each other:
                    // AL BJ EH || CK DG FI

                    let sum_vertex_C = a[0] + a[13] + a[12] + a[11] + a[19];
                    if (
                      sum_vertex_C < fiveAverages ||
                      fiveAverages + 1 < sum_vertex_C
                    ) {
                      continue;
                    }

                    let sum_vertex_K = a[5] + a[8] + a[7] + a[6] + a[1];
                    if (
                      sum_vertex_K < fiveAverages ||
                      fiveAverages + 1 < sum_vertex_K
                    ) {
                      continue;
                    }

                    let sum_vertex_D = a[19] + a[18] + a[11] + a[10] + a[9];
                    if (
                      sum_vertex_D < fiveAverages ||
                      fiveAverages + 1 < sum_vertex_D
                    ) {
                      continue;
                    }

                    let sum_vertex_G = a[15] + a[14] + a[6] + a[5] + a[4];
                    if (
                      sum_vertex_G < fiveAverages ||
                      fiveAverages + 1 < sum_vertex_G
                    ) {
                      continue;
                    }

                    let sum_vertex_F = a[17] + a[16] + a[15] + a[6] + a[7];
                    if (
                      sum_vertex_F < fiveAverages ||
                      fiveAverages + 1 < sum_vertex_F
                    ) {
                      continue;
                    }

                    let sum_vertex_I = a[12] + a[11] + a[10] + a[3] + a[2];
                    if (
                      sum_vertex_I < fiveAverages ||
                      fiveAverages + 1 < sum_vertex_I
                    ) {
                      continue;
                    }

                    if (checkAdditionalD10Condition) {
                      let d10_sum_vertex_A =
                        10 +
                        (a[19] === 10 ? 10 : a[19] % 10) +
                        (a[18] === 10 ? 10 : a[18] % 10) +
                        (a[17] === 10 ? 10 : a[17] % 10) +
                        (a[16] === 10 ? 10 : a[16] % 10);

                      let d10_sum_vertex_B =
                        10 +
                        (a[16] === 10 ? 10 : a[16] % 10) +
                        (a[15] === 10 ? 10 : a[15] % 10) +
                        (a[14] === 10 ? 10 : a[14] % 10) +
                        (a[13] === 10 ? 10 : a[13] % 10);

                      let d10_sum_vertex_C =
                        10 +
                        (a[13] === 10 ? 10 : a[13] % 10) +
                        (a[12] === 10 ? 10 : a[12] % 10) +
                        (a[11] === 10 ? 10 : a[11] % 10) +
                        (a[19] === 10 ? 10 : a[19] % 10);

                      let d10_sum_vertex_D =
                        (a[19] === 10 ? 10 : a[19] % 10) +
                        (a[18] === 10 ? 10 : a[18] % 10) +
                        (a[11] === 10 ? 10 : a[11] % 10) +
                        (a[10] === 10 ? 10 : a[10] % 10) +
                        (a[9] === 10 ? 10 : a[9] % 10);

                      let d10_sum_vertex_E =
                        (a[18] === 10 ? 10 : a[18] % 10) +
                        (a[17] === 10 ? 10 : a[17] % 10) +
                        (a[9] === 10 ? 10 : a[9] % 10) +
                        (a[8] === 10 ? 10 : a[8] % 10) +
                        (a[7] === 10 ? 10 : a[7] % 10);

                      let d10_sum_vertex_F =
                        (a[17] === 10 ? 10 : a[17] % 10) +
                        (a[16] === 10 ? 10 : a[16] % 10) +
                        (a[15] === 10 ? 10 : a[15] % 10) +
                        (a[6] === 10 ? 10 : a[6] % 10) +
                        (a[7] === 10 ? 10 : a[7] % 10);
                      /*
                                            let d10_sum_vertex_G =
                                              (a[15] === 10 ? 10 : a[15] % 10) +
                                              (a[14] === 10 ? 10 : a[14] % 10) +
                                              (dieSize + 1 - a[11] === 10 ? 10 : (dieSize + 1 - a[11]) % 10) +
                                              (dieSize + 1 - a[19] === 10 ?
                                                10 :
                                                (dieSize + 1 - a[19]) % 10) +
                                              (dieSize + 1 - a[18] === 10 ?
                                                10 :
                                                (dieSize + 1 - a[18]) % 10);

                                            let d10_sum_vertex_H =
                                              (a[14] === 10 ? 10 : a[14] % 10) +
                                              (a[13] === 10 ? 10 : a[13] % 10) +
                                              (a[12] === 10 ? 10 : a[12] % 10) +
                                              (dieSize + 1 - a[17] === 10 ?
                                                10 :
                                                (dieSize + 1 - a[17]) % 10) +
                                              (dieSize + 1 - a[18] === 10 ?
                                                10 :
                                                (dieSize + 1 - a[18]) % 10);

                                            let d10_sum_vertex_I =
                                              (dieSize + 1 - a[12] === 10 ?
                                                10 :
                                                (dieSize + 1 - a[12]) % 10) +
                                              (dieSize + 1 - a[11] === 10 ?
                                                10 :
                                                (dieSize + 1 - a[11]) % 10) +
                                              (dieSize + 1 - a[15] === 10 ?
                                                10 :
                                                (dieSize + 1 - a[15]) % 10) +
                                              (dieSize + 1 - a[17] === 10 ?
                                                10 :
                                                (dieSize + 1 - a[17]) % 10) +
                                              (dieSize + 1 - a[16] === 10 ?
                                                10 :
                                                (dieSize + 1 - a[16]) % 10);

                                            let d10_sum_vertex_J =
                                              1 +
                                              (dieSize + 1 - a[16] === 10 ?
                                                10 :
                                                (dieSize + 1 - a[16]) % 10) +
                                              (dieSize + 1 - a[15] === 10 ?
                                                10 :
                                                (dieSize + 1 - a[15]) % 10) +
                                              (dieSize + 1 - a[14] === 10 ?
                                                10 :
                                                (dieSize + 1 - a[14]) % 10) +
                                              (dieSize + 1 - a[13] === 10 ?
                                                10 :
                                                (dieSize + 1 - a[13]) % 10);

                                            let d10_sum_vertex_K =
                                              1 +
                                              (dieSize + 1 - a[19] === 10 ?
                                                10 :
                                                (dieSize + 1 - a[19]) % 10) +
                                              (dieSize + 1 - a[13] === 10 ?
                                                10 :
                                                (dieSize + 1 - a[13]) % 10) +
                                              (dieSize + 1 - a[12] === 10 ?
                                                10 :
                                                (dieSize + 1 - a[12]) % 10) +
                                              (dieSize + 1 - a[11] === 10 ?
                                                10 :
                                                (dieSize + 1 - a[11]) % 10);

                                            let d10_sum_vertex_L =
                                              1 +
                                              (dieSize + 1 - a[19] === 10 ?
                                                10 :
                                                (dieSize + 1 - a[19]) % 10) +
                                              (dieSize + 1 - a[18] === 10 ?
                                                10 :
                                                (dieSize + 1 - a[18]) % 10) +
                                              (dieSize + 1 - a[17] === 10 ?
                                                10 :
                                                (dieSize + 1 - a[17]) % 10) +
                                              (dieSize + 1 - a[16] === 10 ?
                                                10 :
                                                (dieSize + 1 - a[16]) % 10);
                                                */

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
                        )
                        /*
                                                &&
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
                                                */
                      ) {
                        let d10AllSums = [
                          d10_sum_vertex_A,
                          d10_sum_vertex_B,
                          d10_sum_vertex_C,
                          d10_sum_vertex_D,
                          d10_sum_vertex_E,
                          d10_sum_vertex_F,
                          /*d10_sum_vertex_G,
                          d10_sum_vertex_H,
                          d10_sum_vertex_I,
                          d10_sum_vertex_J,
                          d10_sum_vertex_K,
                          d10_sum_vertex_L*/
                        ];

                        console.log(
                          "___",
                          d10AllSums.sort(),
                          a[1], a[2], a[3], a[4], a[5],
                          a[6], a[7], a[8], a[9], a[10],
                          a[11], a[12], a[13], a[14], a[15],
                          a[16], a[17], a[18], a[19], a[0]
                        );
                        viableArrays += 1;
                      }
                    } else {
                      console.log(
                        a[1], a[2], a[3], a[4], a[5],
                        a[6], a[7], a[8], a[9], a[10],
                        a[11], a[12], a[13], a[14], a[15],
                        a[16], a[17], a[18], a[19], a[0]
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

printViableArrays(true);
