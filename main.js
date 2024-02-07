/* jslint devel: true */

function printViableArrays(checkAdditionalD10Condition) {
  const dieSize = 20; // should be in [2, 4, 5, 10, 20]
  const fiveAverages = (dieSize + 1) * 2.5; // [7.5, 12.5, 15, 27.5, 53.5]
  const precision = 1;
  const sideMaxThreshold = Math.min(dieSize + 1, 20);
  const sideMinThreshold = 1 + Math.floor(dieSize / 20);
  let viableArrays = 0;
  let a = [dieSize, 1];

  for (
    a[19] = sideMinThreshold; a[19] < sideMaxThreshold; a[19] += 1
  ) {
    a[5] = dieSize + 1 - a[19];
    for (
      a[18] = sideMinThreshold; a[18] < sideMaxThreshold; a[18] += 1
    ) {
      if (a[18] === a[19] || a[18] === a[5]) {
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
			  //a.contains?
            a[19] === a[16] ||
            a[5] === a[16] ||
            a[18] === a[16] ||
            a[4] === a[16] ||
            a[17] === a[16] ||
            a[3] === a[16] ||
            a[16] >= a[19]
          ) {
            continue;
          }

          a[2] = dieSize + 1 - a[16];

          let sum_vertex_A = a[0] + a[19] + a[18] + a[17] + a[16];
          if (Math.abs(sum_vertex_A - fiveAverages) > precision) {
            continue;
          }

          let sum_vertex_L = a[5] + a[4] + a[3] + a[2] + a[1];
          if (Math.abs(sum_vertex_L - fiveAverages) > precision) {
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
                  a[9] === a[13] ||
                  a[13] >= a[16]

                ) {
                  continue;
                }
                a[8] = dieSize + 1 - a[13];
                let sum_vertex_B = a[0] + a[16] + a[15] + a[14] + a[13];
                if (Math.abs(sum_vertex_B - fiveAverages) > precision) {
                  continue;
                }

                let sum_vertex_J = a[2] + a[10] + a[9] + a[8] + a[1];
                if (Math.abs(sum_vertex_J - fiveAverages) > precision) {
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
                  if (Math.abs(sum_vertex_E - fiveAverages) > precision) {
                    continue;
                  }

                  let sum_vertex_H = a[14] + a[13] + a[12] + a[3] + a[4];
                  if (Math.abs(sum_vertex_H - fiveAverages) > precision) {
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
                    if (Math.abs(sum_vertex_C - fiveAverages) > precision) {
                      continue;
                    }

                    let sum_vertex_K = a[5] + a[8] + a[7] + a[6] + a[1];
                    if (Math.abs(sum_vertex_K - fiveAverages) > precision) {
                      continue;
                    }

                    let sum_vertex_D = a[19] + a[18] + a[11] + a[10] + a[9];
                    if (Math.abs(sum_vertex_D - fiveAverages) > precision) {
                      continue;
                    }

                    let sum_vertex_G = a[15] + a[14] + a[6] + a[5] + a[4];
                    if (Math.abs(sum_vertex_G - fiveAverages) > precision) {
                      continue;
                    }

                    let sum_vertex_F = a[17] + a[16] + a[15] + a[6] + a[7];
                    if (Math.abs(sum_vertex_F - fiveAverages) > precision) {
                      continue;
                    }

                    let sum_vertex_I = a[12] + a[11] + a[10] + a[3] + a[2];
                    if (Math.abs(sum_vertex_I - fiveAverages) > precision) {
                      continue;
                    }

                    if (
                      sum_vertex_A === sum_vertex_B && sum_vertex_B === sum_vertex_C ||
                      sum_vertex_A === sum_vertex_C && sum_vertex_C === sum_vertex_D ||
                      sum_vertex_A === sum_vertex_D && sum_vertex_D === sum_vertex_E ||
                      sum_vertex_A === sum_vertex_E && sum_vertex_E === sum_vertex_F ||
                      sum_vertex_A === sum_vertex_F && sum_vertex_F === sum_vertex_B ||

                      sum_vertex_B === sum_vertex_F && sum_vertex_F === sum_vertex_G ||
                      sum_vertex_B === sum_vertex_G && sum_vertex_G === sum_vertex_H ||
                      sum_vertex_B === sum_vertex_C && sum_vertex_C === sum_vertex_H ||
                      sum_vertex_C === sum_vertex_H && sum_vertex_H === sum_vertex_I ||
                      sum_vertex_C === sum_vertex_D && sum_vertex_D === sum_vertex_I
                    ) {
                      continue;
                    }

                    if (checkAdditionalD10Condition) {
                      viableArrays += calculateAdditionalD10Condition(a);
                    } else {
                      console.log(
                        a[1], a[2], a[3], a[4], a[5],
                        a[6], a[7], a[8], a[9], a[10],
                        a[11], a[12], a[13], a[14], a[15],
                        a[16], a[17], a[18], a[19], a[0]
                      );
                      printd20big(a);
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

const calculateAdditionalD10Condition = function(a) {

  let d10_sum_vertex_A = 10 + d10Value(a[19]) + d10Value(a[18]) + d10Value(a[17]) + d10Value(a[16]);
  let d10_sum_vertex_B = 10 + d10Value(a[16]) + d10Value(a[15]) + d10Value(a[14]) + d10Value(a[13]);
  let d10_sum_vertex_C = 10 + d10Value(a[13]) + d10Value(a[12]) + d10Value(a[11]) + d10Value(a[19]);
  let d10_sum_vertex_D = d10Value(a[19]) + d10Value(a[18]) + d10Value(a[11]) + d10Value(a[10]) + d10Value(a[9]);
  let d10_sum_vertex_E = d10Value(a[18]) + d10Value(a[17]) + d10Value(a[9]) + d10Value(a[8]) + d10Value(a[7]);
  let d10_sum_vertex_F = d10Value(a[17]) + d10Value(a[16]) + d10Value(a[15]) + d10Value(a[6]) + d10Value(a[7]);

  let d10_sum_vertex_G = d10Value(a[15]) + d10Value(a[14]) + d10Value(a[6]) + d10Value(a[5]) + d10Value(a[4]);
  let d10_sum_vertex_H = d10Value(a[14]) + d10Value(a[13]) + d10Value(a[12]) + d10Value(a[3]) + d10Value(a[4]);
  let d10_sum_vertex_I = d10Value(a[12]) + d10Value(a[11]) + d10Value(a[10]) + d10Value(a[2]) + d10Value(a[3]);
  let d10_sum_vertex_J = 1 + d10Value(a[2]) + d10Value(a[10]) + d10Value(a[9]) + d10Value(a[8]);
  let d10_sum_vertex_K = 1 + d10Value(a[5]) + d10Value(a[6]) + d10Value(a[7]) + d10Value(a[8]);
  let d10_sum_vertex_L = 1 + d10Value(a[5]) + d10Value(a[4]) + d10Value(a[3]) + d10Value(a[2]);

  let permissableD10Sums = [22, 23, 32, 33];

  if (
    permissableD10Sums.find((elem) => elem === d10_sum_vertex_A) &&
    permissableD10Sums.find((elem) => elem === d10_sum_vertex_B) &&
    permissableD10Sums.find((elem) => elem === d10_sum_vertex_C) &&
    permissableD10Sums.find((elem) => elem === d10_sum_vertex_D) &&
    permissableD10Sums.find((elem) => elem === d10_sum_vertex_E) &&
    permissableD10Sums.find((elem) => elem === d10_sum_vertex_F) &&
    permissableD10Sums.find((elem) => elem === d10_sum_vertex_G) &&
    permissableD10Sums.find((elem) => elem === d10_sum_vertex_H) &&
    permissableD10Sums.find((elem) => elem === d10_sum_vertex_I) &&
    permissableD10Sums.find((elem) => elem === d10_sum_vertex_J) &&
    permissableD10Sums.find((elem) => elem === d10_sum_vertex_K) &&
    permissableD10Sums.find((elem) => elem === d10_sum_vertex_L)
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
      d10AllSums.sort(),
      a[1], a[2], a[3], a[4], a[5],
      a[6], a[7], a[8], a[9], a[10],
      a[11], a[12], a[13], a[14], a[15],
      a[16], a[17], a[18], a[19], a[0]
    );
    printd20big(a);
    return 1;
  }

  return 0;
};

function d10Value(i) {
  return i > 10 ? i - 10 : i;
}

/**        /\    /\    /\    /\    /\
 *        /20\  /19\  /18\  /17\  /16\
 *       /____\/____\/____\/____\/____\
 *      /\ 13 /\ 11 /\  9 /\  7 /\ 15 /
 *     /14\  /12\  /10\  / 8\  / 6\  /
 *    /____\/____\/____\/____\/____\/
 *    \  4 /\  3 /\  2 /\  1 /\  5 /
 *     \  /  \  /  \  /  \  /  \  /
 *      \/    \/    \/    \/    \/
 */
function printd20flat(a) {
  console.log("\n   " + "    /\\".repeat(5));
  console.log("      /" + [0,19,18,17,16].map((i)=>a[i]).map((i)=>(i<10? " "+i : ""+i)).join("\\  /") + "\\");
  console.log("     " + "/____\\".repeat(5));

  console.log("    /\\ " + [13,11,9,7,15].map((i)=>a[i]).map((i)=>(i<10? " "+i : ""+i)).join(" /\\ ") + " /");
  console.log("   /" + [14,12,10,8,6].map((i)=>a[i]).map((i)=>(i<10? " "+i : ""+i)).join("\\  /") + "\\  /");
  console.log("  " + "/____\\".repeat(5) + "/");

  console.log("  \\ " + [4,3,2,1,5].map((i)=>a[i]).map((i)=>(i<10? " "+i : ""+i)).join(" /\\ ") + " /");
  console.log(" " + "  \\  /".repeat(5));
  console.log("" + "    \\/".repeat(5));
}

/**              _
 *            __/ \__                    __/|\__
 *         __/ _/ \_ \__              __/   |   \__
 *      __/20_/ 19  \_18\__        __/  17  |  16  \__
 *     /____/_________\____\      /_________|_________\
 *    |    /\         /\    |    |\        / \        /|
 *    |13 /  \  11   /  \ 9 |    | \  7   /   \  15  / |
 *    |  /    \     /    \  |    |  \    /     \    /  |
 *    | /  12  \   /  10  \ |    | 8 \  /   6   \  / 14|
 *    |/________\ /________\|    |____\/_________\/____|
 *     \__       |       __/      \__  \_       _/  __/
 *        \__ 3  |  2 __/            \_1 \_ 5 _/ 4_/
 *           \__ | __/                  \__\ /__/
 *              \|/                        \_/
 */
function printd20big(a) {
  const p = 4;
  const m = p+23;
  let s = p+11;

  let nums = [0,19,18,17,16].map((i)=>a[i].toString()).map((x,ind)=>(ind===2||ind===4? x.padEnd(2," ") : x.padStart(2," ")))
  console.log("\n" + " ".repeat(s) + "_");
  s -= 3;
  console.log( (" ".repeat(s) + "__/ \\__").padEnd(m+s," ") +
	  "__/|\\__");
  s -= 3;
  console.log( (" ".repeat(s) + "__/ _/ \\_ \\__").padEnd(m+s," ") +
	  "__/   |   \\__");
  s -= 3;
  console.log( (" ".repeat(s) + `__/${nums[0]}_/ ${nums[1]}  \\_${nums[2]}\\__`).padEnd(m+s," ") +
      `__/  ${nums[3]}  |  ${nums[4]}  \\__`);
  s -= 1;
  console.log( (" ".repeat(s) + "/____/_________\\____\\").padEnd(m+s," ") +
      "/_________|_________\\");

  s = p;
  nums = [13,11,9,7,15].map((i)=>a[i].toString()).map((x,ind)=>(ind===2||ind===3? x.padEnd(2," ") : x.padStart(2," ")))
  console.log( (" ".repeat(s) + "|    /\\         /\\    |").padEnd(m+s," ") +
      "|\\        / \\        /|");
  console.log( (" ".repeat(s) + `|${nums[0]} /  \\  ${nums[1]}   /  \\ ${nums[2]}|`).padEnd(m+s," ") +
      `| \\  ${nums[3]}  /   \\  ${nums[4]}  / |`);
  console.log( (" ".repeat(s) + "|  /    \\     /    \\  |").padEnd(m+s," ") +
      "|  \\    /     \\    /  |");
  nums = [12,10,8,6,14].map((i)=>a[i].toString()).map((x,ind)=>(ind===0||ind===4? x.padEnd(2," ") : x.padStart(2," ")))
  console.log( (" ".repeat(s) + `| /  ${nums[0]}  \\   /  ${nums[1]}  \\ |`).padEnd(m+s," ") +
      `|${nums[2]} \\  /  ${nums[3]}   \\  / ${nums[4]}|`);
  console.log( (" ".repeat(s) + "|/________\\ /________\\|").padEnd(m+s," ") +
      "|____\\/_________\\/____|");

  s += 1;
  nums = [3,2,1,5,4].map((i)=>a[i].toString()).map((x,ind)=>(ind===1||ind===2? x.padEnd(2," ") : x.padStart(2," ")))
  console.log( (" ".repeat(s) + "\\__       |       __/").padEnd(m+s," ") +
      "\\__  \\_       _/  __/");
  s += 3;
  console.log( (" ".repeat(s) + `\\__${nums[0]}  |  ${nums[1]}__/`).padEnd(m+s," ") +
      `\\_${nums[2]}\\_${nums[3]} _/${nums[4]}_/`);
  s += 3;
  console.log( (" ".repeat(s) + "\\__ | __/").padEnd(m+s," ") +
      "\\__\\ /__/");
  s += 3;
  console.log( (" ".repeat(s) + "\\|/").padEnd(m+s," ") +
      "\\_/");
}


printViableArrays(false);
