import { StyleSheet, Text, View, Dimensions } from "react-native";

import { Colors } from "@/constants/Colors";

const { height, width } = Dimensions.get("window");

export default function ChartsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico e Análise de Dados</Text>

      <View style={styles.chartsContainer}>
        <View style={styles.chartBackground}>
          <Text style={styles.chartTitle}>Evasão - 7 dias</Text>
          <Text style={styles.chartSubtitle}>
            A evasão da Caixa d’Agua nos ultimos 7 dias foi de 2 mil litros por
            dia, em média.
          </Text>
        </View>
        <View style={styles.chartBackground}>
          <Text style={styles.chartTitle}>Evasão - mês passado</Text>
          <Text style={styles.chartSubtitle}>
            Em média, a evasão foi menor neste mês do que no mês passado.
          </Text>
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
  chartsContainer: {
    flex: 1,
    marginTop: height * 0.02,
  },
  chartBackground: {
    backgroundColor: Colors.tintLight,
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: height * 0.03,
  },
  chartTitle: {
    color: Colors.tintDark,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  chartSubtitle: {
    color: Colors.text,
    fontSize: 14,
  },
});
