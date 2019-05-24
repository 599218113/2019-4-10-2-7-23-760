module.exports = function main(inputs) {
    var dis = inputs["distance"];
    var pT = inputs["parkTime"];
    var ans = 6;
    ans += 0.25 * pT;
    if(dis >= 2) {
        ans += 0.8 * (dis - 2);
        if(dis >= 8) {
            ans += 0.8 * 0.5 * (dis - 8);
        }
    }
    return Math.round(ans);
};