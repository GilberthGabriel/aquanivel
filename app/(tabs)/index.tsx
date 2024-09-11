import { StyleSheet, Text, View, Dimensions } from "react-native";

import { Colors } from "@/constants/Colors";
import { getPercentage } from "@/service/api";
import { useState, useEffect } from "react";

const ONE_SECONDS_IN_MS = 2000;

const { height, width } = Dimensions.get("window");

export default function HomeScreen() {
  const [chartData, setChartData] = useState<number>(0);

  useEffect(() => {
    async function getPercentageFromApi() {
      return await getPercentage();
    }

    let interval = setInterval(async () => {
      const res = await getPercentageFromApi();

      setChartData(res?.percentage || 0);
    }, ONE_SECONDS_IN_MS);

    // Fetch first time
    getPercentageFromApi();

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tempo real</Text>

      <View style={styles.percentageContainer}>
        <View style={styles.percentageBackground}>
          <Text style={styles.percentage}>{chartData}%</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: height * 0.05,
    paddingHorizontal: width * 0.05,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.text,
  },
  percentageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: height * 0.02,
  },
  percentageBackground: {
    backgroundColor: Colors.tintDark,
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  percentage: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
