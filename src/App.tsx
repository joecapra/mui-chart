import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

function roundArrayNumbers(arr) {
  return arr.map((num) => Math.round(num));
}

const d = [
  7526.24696, 7526.24696, 7526.24696, 7529.5278, 7532.80864, 7532.80864,
  7536.08948, 7536.08948, 7539.37032, 7542.65116, 7549.21284, 7549.21284,
  7552.49368, 7555.77452, 7562.3362, 7572.17872, 7582.02124, 7588.58292,
  7588.58292, 7591.86376, 7591.86376, 7595.1446, 7598.42544, 7598.42544,
  7601.70628, 7608.26796, 7614.82964, 7621.39132, 7637.79552, 7644.3572,
  7657.48056, 7667.32308, 7670.60392, 7680.44644, 7690.28896, 7696.85064,
  7700.13148, 7700.13148, 7703.41232, 7703.41232, 7706.69316, 7713.25484,
  7719.81652, 7729.65904, 7732.93988, 7742.7824, 7749.34408, 7752.62492,
  7752.62492, 7752.62492, 7759.1866, 7762.46744, 7765.74828, 7769.02912,
  7772.30996, 7778.87164, 7788.7141599999995, 7801.83752, 7808.3992, 7814.96088,
  7818.24172, 7824.8034, 7831.36508, 7837.92676, 7841.2076, 7844.48844,
  7844.48844, 7847.7692799999995, 7847.7692799999995, 7851.05012, 7857.6118,
  7860.89264, 7864.17348, 7867.45432, 7874.016, 7874.016, 7880.57768,
  7883.85852, 7887.13936, 7887.13936, 7890.4202, 7896.98188, 7903.54356,
  7913.38608, 7919.94776, 7926.50944, 7929.79028, 7936.35196, 7939.6328,
  7942.91364, 7949.47532, 7956.037, 7962.59868, 7969.16036, 7975.72204,
  7982.28372, 7988.8454, 7995.40708, 8001.96876, 8008.5304399999995, 8011.81128,
  8015.09212, 8021.6538, 8028.21548, 8031.49632, 8038.058, 8041.33884,
  8047.90052, 8054.4622, 8061.02388, 8067.5855599999995, 8074.14724, 8077.42808,
  8083.98976, 8090.55144, 8097.11312, 8100.39396, 8106.95564, 8110.23648,
  8113.51732, 8120.079, 8120.079, 8126.6406799999995, 8126.6406799999995,
  8129.92152, 8133.20236, 8133.20236, 8136.4832, 8139.76404, 8143.04488,
  8143.04488, 8146.32572, 8149.60656, 8149.60656, 8149.60656, 8152.8874,
  8156.16824, 8162.72992, 8166.01076, 8169.2916, 8172.57244, 8179.13412,
  8185.6957999999995, 8192.25748, 8198.81916, 8205.38084, 8215.22336, 8218.5042,
  8225.06588, 8228.34672, 8234.9084, 10000.18924, 8241.47008, 8244.75092,
  8251.3126, 8251.3126, 8261.15512, 8264.43596, 8264.43596, 8267.7168,
  8270.99764, 8274.27848, 8277.55932, 8280.84016, 8287.40184, 8293.96352,
  8297.24436, 8300.5252, 8303.80604, 8307.08688, 8310.36772, 8320.21024,
  8326.77192, 8336.61444, 8343.17612, 8349.7378, 8353.01864, 8353.01864,
  8362.86116, 8369.42284, 8372.70368, 8375.98452, 8375.98452, 8379.26536,
  8389.10788, 8395.66956, 8395.66956, 8398.9504, 8402.23124, 8402.23124,
  8408.79292, 8408.79292, 8415.3546, 8421.91628, 8428.47796, 8431.7588,
  8441.60132, 8448.163, 8454.72468, 8461.28636, 8464.5672, 8471.12888,
  8477.69056, 8484.25224, 8487.53308, 8487.53308, 8490.81392, 8494.09476,
  8500.65644, 8507.21812, 8510.49896, 8517.06064, 8520.34148, 8526.90316,
  8530.184, 8540.02652, 8546.5882, 8549.86904, 8553.14988, 8559.71156,
  8562.9924, 8572.83492, 8579.3966, 8585.95828, 8595.800799999999, 8602.36248,
  8608.92416, 8618.76668, 8622.04752, 8625.32836, 8628.6092, 8638.45172,
  8641.73256, 8641.73256, 8645.0134, 8648.29424, 8654.85592, 8658.13676,
  8658.13676, 8664.69844, 8667.97928, 8674.54096, 8681.10264, 8690.94516,
  8700.78768, 8707.34936, 8713.911039999999, 8723.75356, 8727.0344, 8730.31524,
  8736.87692, 8743.4386, 8750.00028, 8756.561959999999, 8759.8428, 8766.40448,
  8769.68532, 8772.96616, 8776.247, 8782.80868, 8786.08952, 8786.08952,
  8789.37036, 8792.6512, 8799.21288, 9000.0554, 8815.61708, 8825.4596,
  8828.74044, 8828.74044, 8835.30212, 8838.58296, 8845.14464, 8848.42548,
  8851.70632, 8854.98716, 8858.268, 8861.54884, 8868.11052, 8868.11052,
  8874.672199999999, 8881.23388, 8887.79556, 8891.0764, 8891.0764, 8897.63808,
  8900.91892, 8900.91892, 8907.4806, 8910.76144, 8917.32312, 8923.8848,
  8927.16564, 8933.72732, 8937.00816, 8943.56984, 8943.56984, 8946.85068,
  8950.13152, 8950.13152, 8953.41236, 8956.6932, 8959.97404, 8966.53572,
  8976.37824, 8982.93992, 8989.5016, 8996.06328, 9005.9058, 9012.46748, 9022.31,
  9025.59084, 9032.15252, 9038.7142, 9045.27588, 9048.55672, 9055.1184,
  9061.68008, 9068.24176, 9074.80344, 9084.64596, 9087.9268, 9094.48848,
  9101.05016, 9101.05016, 9104.331, 9107.61184, 9117.45436, 9124.01604,
  9127.29688, 9133.85856, 9140.42024, 9143.70108, 9146.98192, 9150.26276,
  9153.543599999999, 9156.82444, 9163.38612, 9163.38612, 9166.66696, 9166.66696,
  9169.9478, 9169.9478, 9173.22864, 9179.79032, 9183.07116, 9189.63284,
  9189.63284, 9189.63284, 9192.91368, 9196.19452, 9199.47536, 9202.7562,
  9209.31788, 9212.59872, 9219.1604, 9225.72208, 9232.28376, 9232.28376,
  9235.5646, 9238.84544, 9242.12628, 9245.40712, 9248.68796, 9248.68796,
  9248.68796, 9255.24964, 9258.53048, 9261.81132, 9261.81132, 9265.09216,
  9268.373, 9268.373, 9271.653839999999, 9274.93468, 9278.21552, 9281.49636,
  9284.7772, 9291.33888, 9297.90056, 9304.46224, 9311.02392, 9324.14728,
  9330.70896, 9337.27064, 9347.11316, 9350.394, 9356.95568, 9363.51736,
  9370.07904, 9373.35988, 9376.64072, 9376.64072, 9379.92156, 9386.48324,
  9386.48324, 9389.76408, 9393.04492, 9399.6066, 9402.88744, 9416.0108,
  9419.29164, 9419.29164, 9416.0108, 9419.29164, 9419.29164, 9422.57248,
  9425.85332, 9425.85332, 9429.13416, 9429.13416, 9435.69584, 9438.97668,
  9438.97668, 9442.25752, 9445.53836, 9448.8192, 9452.10004, 9455.38088,
  9458.66172, 9465.2234, 9468.50424, 9471.78508, 9478.34676, 9481.6276,
  9484.90844, 9491.47012, 9494.75096, 9501.31264, 9504.59348, 9507.87432,
  9514.436, 9517.71684, 9517.71684, 9520.99768, 9527.55936, 9530.8402,
  9534.12104, 9540.68272, 9547.2444, 9550.525239999999, 9557.08692, 9563.6486,
  9560.36776, 9563.6486, 9563.6486, 9566.92944, 9566.92944, 9570.21028,
  9576.77196, 9580.0528, 9589.89532, 9593.176159999999, 9599.73784, 9603.01868,
  9612.8612, 9625.98456, 9635.82708, 9639.10792, 9645.6696, 9645.6696,
  9652.23128, 9655.51212, 9665.35464, 9671.91632, 9671.91632, 9678.478,
  9678.478, 9685.03968, 9685.03968, 9688.32052, 9691.60136, 9691.60136,
  9694.8822, 9698.16304, 9698.16304, 9704.72472, 9704.72472, 9708.00556,
  9714.56724, 9714.56724, 9721.12892, 9724.40976, 9730.97144, 9734.25228,
  9740.81396, 9744.0948, 9750.65648, 9760.499, 9767.06068, 9767.06068,
  9767.06068, 9770.34152, 9773.62236, 9776.9032, 9783.46488, 9786.74572,
  9790.02656, 9790.02656, 9790.02656, 9790.02656, 9796.58824, 9799.86908,
  9803.14992, 9806.43076, 9812.99244, 9812.99244, 9812.99244, 9812.99244,
  9812.99244, 9812.99244, 9812.99244, 9812.99244, 9816.27328, 9816.27328,
  9816.27328, 9816.27328, 9819.55412, 9819.55412, 9822.83496, 9822.83496,
  9826.1158, 9829.39664, 9829.39664, 9832.67748, 9832.67748, 9832.67748,
  9832.67748, 9835.95832, 9842.52, 9842.52, 9845.80084, 9845.80084, 9845.80084,
  9849.08168, 9852.36252, 9852.36252, 9858.9242, 9862.20504, 9865.48588,
  9868.76672, 9875.3284, 9878.60924, 9885.17092, 9888.45176, 9888.45176,
  9891.7326, 9895.01344, 9895.01344, 9898.29428, 9901.57512, 9904.85596,
  9908.1368, 9914.69848, 9917.97932, 9921.26016, 9924.541, 9924.541, 9927.82184,
  9931.10268, 9934.38352, 9937.66436, 9940.9452, 9947.50688, 9954.06856,
  9954.06856, 9957.3494, 9960.63024, 9960.63024, 9963.91108, 9967.19192,
  9973.7536, 9977.03444, 9980.31528, 9986.87696, 9993.43864, 9996.71948,
  10003.28116, 10009.84284, 10019.68536, 10022.9662, 10026.24704, 10029.52788,
  10032.808719999999, 10042.65124, 10049.21292, 10055.7746, 10055.7746,
  10059.05544, 10065.61712, 10068.89796, 10075.45964, 10075.45964, 10078.74048,
  10085.30216, 10085.30216, 10088.583, 10088.583, 10091.86384, 10098.42552,
  10098.42552, 10098.42552, 10104.9872, 10108.26804, 10108.26804, 10111.54888,
  10114.82972, 10121.3914, 10124.67224, 10131.23392, 10131.23392, 10137.7956,
  10137.7956, 10137.7956, 10141.07644, 10141.07644, 10144.35728,
  10150.918959999999, 10157.48064, 10167.32316, 10167.32316, 10170.604,
  10177.16568, 10177.16568, 10183.72736, 10183.72736, 10187.0082, 10190.28904,
  10193.56988, 10193.56988, 10196.85072, 10203.4124, 10209.97408, 10209.97408,
  10213.25492, 10216.53576, 10216.53576, 10223.09744, 10232.93996, 10242.78248,
  10249.34416, 10255.90584, 10259.18668, 10265.74836, 10265.74836,
  10269.029199999999, 10272.31004, 10278.87172, 10282.15256, 10282.15256,
  10288.71424, 10288.71424, 10295.27592, 10298.55676, 10305.11844,
  10311.680119999999, 10314.96096, 10321.52264, 10324.80348, 10331.36516,
  10344.48852, 10347.76936, 10354.33104, 10360.89272, 10364.17356, 10370.73524,
  10374.01608, 10377.29692, 10380.57776, 10383.8586, 10387.13944, 10390.42028,
  10393.70112,
];
const roundedArray = roundArrayNumbers(d);
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];
console.log(roundedArray);
export default function App() {
  return (
    <LineChart
      onClick={(e) => console.log(e)}
      width={1500}
      height={300}
      series={[{ data: roundedArray, label: "uv", showMark: false }]}
      xAxis={[
        {
          tickInterval: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900],
          scaleType: "point",
          data: Array.from({ length: roundedArray.length }, (_, i) => i + 1),
        },
      ]}
    />
  );
}
