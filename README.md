If any air is trapped inside a d20 near a vertex, numbers surrounding that vertex will be rolled more often. 
As the average number on a d20 is 10.5, five average numbers adds to 52.5 and die where every vertex has a vertex sum close to that could be considered more resilient against manufacturing issues.
To ensure an even higher grade of resilience no side should have three vertices of the same value on it.

The script in this repository finds all configurations such:
* opposite sides sum to 21 (as is usually done with a d20)
* for each vertex the five sides surrounding it sum to 52 or 53
* for each face at most two vertices on that side have the same value

Throughout the code as well as in the listings below the fairly common d20 spindown die (20 neighbours 19, 16, and 13) is used as a reference point.
The first listing for example has to be interpreted such that the faces surrounding 20 on a spindown (19-11) should be relabeled as _4_, 5, 9, _14_, 3, 2, _13_, 10, 6.
Numbers in italics (4, 14, 13) share an edge with 20 while the others share only a point with 20.

After eliminating several symmetries there only three configurations satisfying the above conditions:

1, 8, 18, 19, 7, 11, 17, 16, 15, 12, 10, 4, 5, 6, 9, 13, 3, 2, 14, 20

1, 8, 18, 19, 7, 12, 15, 17, 16, 11, 9, 6, 4, 5, 10, 13, 3, 2, 14, 20

1, 8, 17, 19, 7, 11, 18, 16, 12, 15, 10, 3, 5, 9, 6, 13, 4, 2, 14, 20

Moreover these configurations additionally have the property that when you to read their numbers as a d10 (1-10=>1-10, 11-20=>1-10) their vertex sums are [22, 22, 22, 23, 23, 23, 32, 32, 32, 33, 33, 33] and thus close to a hypothetical optimum of 27.5 = 5*5.5.
