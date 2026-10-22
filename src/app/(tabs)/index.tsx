import { globalStyles } from "@/shared/globalStyles/_global.styles";
import { PlugIcon } from "@/shared/icons/PlugIcon";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function HomeScreen() {
  const WelcomeImage = "";

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text
          style={[globalStyles.h2, { color: "#b9a891", paddingBottom: 10 }]}
        >
          Лента новостей
        </Text>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: "#E1740040",
              borderRadius: 4,
              overflow: "hidden",
              width: "50%",
              height: 80,
              transform: [{ perspective: 500 }, { rotateY: "-30deg" }],
            }}
          >
            <LinearGradient
              colors={["#17110B", "#0B0A09"]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 0 }}
              style={{
                flex: 1,
                gap: 4,
                paddingHorizontal: 14,
                paddingVertical: 8,
              }}
            >
              <View>
                <Ionicons name="list" size={18} color={"#E17100b0"} />
              </View>
              <View>
                <Text style={[globalStyles.p_ultra_mini, { color: "#E17100" }]}>
                  Район
                </Text>
                <Text style={[globalStyles.p_mini, { color: "#b9a891" }]}>
                  Новости района
                </Text>
              </View>
            </LinearGradient>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#E1740040",
              borderRadius: 4,
              overflow: "hidden",
              width: "50%",
              height: 80,
              transform: [{ perspective: 500 }, { rotateY: "30deg" }],
            }}
          >
            <LinearGradient
              colors={["#17110B", "#0B0A09"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                flex: 1,
                gap: 4,
                paddingHorizontal: 14,
                paddingVertical: 8,
              }}
            >
              <View>
                <Ionicons name="disc" size={18} color={"#E17100b0"} />
              </View>
              <View>
                <Text style={[globalStyles.p_ultra_mini, { color: "#E17100" }]}>
                  Сегодня
                </Text>
                <Text style={[globalStyles.p_mini, { color: "#b9a891" }]}>
                  Скидки дня
                </Text>
              </View>
            </LinearGradient>
          </View>
        </View>
        <LinearGradient
          colors={["transparent", "#E17100", "transparent"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ width: "100%", height: 1, marginTop: 4 }}
        ></LinearGradient>

        <View
          style={{
            width: "100%",
          }}
        >
          <View
            style={{
              width: "100%",
              height: 205,
              backgroundColor: "#14110E",
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            {WelcomeImage ? (
              <Image
                source={WelcomeImage}
                placeholder={"Data"}
                contentFit="cover"
                transition={1000}
                style={{ width: "100%", height: "60%" }}
              />
            ) : (
              <PlugIcon width="100%" height="60%" />
            )}
            <View
              style={{
                flexDirection: "column",
                flex: 1,
              }}
            >
              <View
                style={{
                  height: "60%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={[globalStyles.h3, { color: "#6F6254" }]}>
                  Новый ВПН
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flex: 1,
                    height: "100%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    paddingTop: 14,
                    paddingHorizontal: 14,
                    gap: 8,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={[
                      globalStyles.p_ultra_mini,
                      {
                        width: "auto",
                        backgroundColor: "#3A2208",
                        color: "#FF9A3D",
                        paddingVertical: 4,
                        paddingHorizontal: 10,
                        borderRadius: 12,
                      },
                    ]}
                  >
                    Основная новость
                  </Text>
                  <Text
                    style={[
                      globalStyles.p_ultra_mini,
                      { width: "auto", height: "auto", color: "#9A8D7E" },
                    ]}
                  >
                    2 ч назад
                  </Text>
                </View>
                <Text
                  style={[
                    globalStyles.h3,
                    {
                      flex: 1,
                      paddingHorizontal: 14,
                      paddingBottom: 14,
                      color: "#EDE3D6",
                    },
                  ]}
                >
                  Появился новый рабочий ВПН
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            width: "100%",
            gap: 12,
            minHeight: "auto",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={[
                globalStyles.p_mini,
                { color: "#EDE3D6", fontWeight: 600 },
              ]}
            >
              Рекомендуем вам
            </Text>
            <Text style={[globalStyles.textOrange, { fontWeight: 700 }]}>
              Все
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              flex: 1,
              gap: 20,
              minHeight: "auto",
            }}
          >
            <View
              style={{
                flex: 1,
                height: 205,
                backgroundColor: "#14110E",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              {WelcomeImage ? (
                <Image
                  source={WelcomeImage}
                  placeholder={"Data"}
                  contentFit="cover"
                  transition={1000}
                  style={{ width: "100%", height: "60%" }}
                />
              ) : (
                <PlugIcon width="100%" height="60%" />
              )}
              <View
                style={{
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <View
                  style={{
                    height: "60%",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {WelcomeImage ? (
                    <Image
                      source={WelcomeImage}
                      placeholder={"Data"}
                      contentFit="cover"
                      transition={1000}
                      style={{ width: "100%", height: "100%" }}
                    />
                  ) : (
                    <Text style={[globalStyles.h3, { color: "#6F6254" }]}>
                      Фото
                    </Text>
                  )}
                </View>
                <View style={{ flex: 1, flexDirection: "column", gap: 2 }}>
                  <Text
                    style={[
                      globalStyles.p_mini,
                      {
                        paddingHorizontal: 12,
                        paddingTop: 10,
                        color: "#EDE3D6",
                      },
                    ]}
                  >
                    Кресло [Модель]
                  </Text>
                  <Text
                    style={[
                      globalStyles.p_mini,
                      {
                        paddingHorizontal: 12,
                        paddingBottom: 10,
                        color: "#EDE3D6",
                      },
                    ]}
                  >
                    [цена] ₽
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                height: 205,
                backgroundColor: "#14110E",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              {WelcomeImage ? (
                <Image
                  source={WelcomeImage}
                  placeholder={"Data"}
                  contentFit="cover"
                  transition={1000}
                  style={{ width: "100%", height: "60%" }}
                />
              ) : (
                <PlugIcon width="100%" height="60%" />
              )}
              <View
                style={{
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <View
                  style={{
                    height: "60%",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {WelcomeImage ? (
                    <Image
                      source={WelcomeImage}
                      placeholder={"Data"}
                      contentFit="cover"
                      transition={1000}
                      style={{ width: "100%", height: "100%" }}
                    />
                  ) : (
                    <Text style={[globalStyles.h3, { color: "#6F6254" }]}>
                      Фото
                    </Text>
                  )}
                </View>

                <View style={{ flex: 1, flexDirection: "column", gap: 2 }}>
                  <Text
                    style={[
                      globalStyles.p_mini,
                      {
                        paddingHorizontal: 12,
                        paddingTop: 10,
                        color: "#EDE3D6",
                      },
                    ]}
                  >
                    Куртка [Модель]
                  </Text>
                  <Text
                    style={[
                      globalStyles.p_mini,
                      {
                        paddingHorizontal: 12,
                        paddingBottom: 10,
                        color: "#EDE3D6",
                      },
                    ]}
                  >
                    [цена] ₽
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            width: "100%",
            gap: 12,
            minHeight: "auto",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={[
                globalStyles.p_mini,
                { color: "#EDE3D6", fontWeight: 600 },
              ]}
            >
              Новости района
            </Text>
            <Text style={[globalStyles.textOrange, { fontWeight: 700 }]}>
              Все
            </Text>
          </View>
          <View style={{ flexDirection: "column", gap: 16 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                minHeight: 96,
                backgroundColor: "#14110E",
                borderRadius: 16,
                overflow: "hidden",
                padding: 12,
                gap: 12,
              }}
            >
              <View
                style={{
                  flex: 1,
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                {WelcomeImage ? (
                  <Image
                    source={WelcomeImage}
                    placeholder={"Data"}
                    contentFit="cover"
                    transition={1000}
                    style={{ width: "100%", height: "60%" }}
                  />
                ) : (
                  <PlugIcon width="100%" height="100%" flex={1} />
                )}
                <Text
                  style={[
                    globalStyles.h3,
                    {
                      color: "#6F6254",
                      marginVertical: "auto",
                      textAlign: "center",
                    },
                  ]}
                >
                  Фото
                </Text>
              </View>

              <View
                style={{
                  flex: 2,
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Text style={[globalStyles.p_ultra_mini, { color: "#EDE3D6" }]}>
                  ОТКРЫТИЕ
                </Text>
                <Text style={[globalStyles.h3, { color: "#EDE3D6" }]}>
                  Футбольный матч - Джавгат 3 : 1 Дюбек
                </Text>
                <Text style={[globalStyles.p_ultra_mini, { color: "#EDE3D6" }]}>
                  Вчера
                </Text>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                minHeight: 96,
                backgroundColor: "#14110E",
                borderRadius: 16,
                overflow: "hidden",
                padding: 12,
                gap: 12,
              }}
            >
              <View
                style={{
                  flex: 1,
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                {WelcomeImage ? (
                  <Image
                    source={WelcomeImage}
                    placeholder={"Data"}
                    contentFit="cover"
                    transition={1000}
                    style={{ width: "100%", height: "60%" }}
                  />
                ) : (
                  <PlugIcon width="100%" height="100%" flex={1} />
                )}
                <Text
                  style={[
                    globalStyles.h3,
                    {
                      color: "#6F6254",
                      marginVertical: "auto",
                      textAlign: "center",
                    },
                  ]}
                >
                  Фото
                </Text>
              </View>

              <View
                style={{
                  flex: 2,
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Text style={[globalStyles.p_ultra_mini, { color: "#EDE3D6" }]}>
                  СОБЫТИЕ
                </Text>
                <Text style={[globalStyles.h3, { color: "#EDE3D6" }]}>
                  Турнир по Generals: Zero Hour
                </Text>
                <Text style={[globalStyles.p_ultra_mini, { color: "#EDE3D6" }]}>
                  11.11.2026г
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              width: "100%",
              gap: 12,
              minHeight: "auto",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={[
                  globalStyles.p_mini,
                  { color: "#EDE3D6", fontWeight: 600 },
                ]}
              >
                Скидки Недели
              </Text>
              <Text style={[globalStyles.textOrange, { fontWeight: 700 }]}>
                Все
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                flex: 1,
                gap: 20,
                minHeight: "auto",
              }}
            >
              <View
                style={{
                  flex: 1,
                  height: 205,
                  backgroundColor: "#14110E",
                  borderRadius: 16,
                  overflow: "hidden",
                }}
              >
                {WelcomeImage ? (
                  <Image
                    source={WelcomeImage}
                    placeholder={"Data"}
                    contentFit="cover"
                    transition={1000}
                    style={{ width: "100%", height: "60%" }}
                  />
                ) : (
                  <PlugIcon width="100%" height="60%" />
                )}
                <View
                  style={{
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <View
                    style={{
                      height: "60%",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <View
                      style={{
                        position: "absolute",
                        top: 8,
                        left: 8,
                        backgroundColor: "#E8700A",
                        borderRadius: 10,
                      }}
                    >
                      <Text
                        style={{
                          color: "#0B0A09",
                          paddingVertical: 3,
                          paddingHorizontal: 8,
                          fontWeight: 600,
                        }}
                      >
                        -10%
                      </Text>
                    </View>
                    {WelcomeImage ? (
                      <Image
                        source={WelcomeImage}
                        placeholder={"Data"}
                        contentFit="cover"
                        transition={1000}
                        style={{ width: "100%", height: "100%" }}
                      />
                    ) : (
                      <Text style={[globalStyles.h3, { color: "#6F6254" }]}>
                        Фото
                      </Text>
                    )}
                  </View>
                  <View style={{ flex: 1, flexDirection: "column", gap: 2 }}>
                    <Text
                      style={[
                        globalStyles.p_mini,
                        {
                          paddingHorizontal: 12,
                          paddingTop: 10,
                          color: "#EDE3D6",
                        },
                      ]}
                    >
                      Стол [Модель]
                    </Text>
                    <Text
                      style={[
                        globalStyles.p_mini,
                        {
                          paddingHorizontal: 12,
                          paddingBottom: 10,
                          color: "#EDE3D6",
                        },
                      ]}
                    >
                      [цена] ₽
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  height: 205,
                  backgroundColor: "#14110E",
                  borderRadius: 16,
                  overflow: "hidden",
                }}
              >
                {WelcomeImage ? (
                  <Image
                    source={WelcomeImage}
                    placeholder={"Data"}
                    contentFit="cover"
                    transition={1000}
                    style={{ width: "100%", height: "60%" }}
                  />
                ) : (
                  <PlugIcon width="100%" height="60%" />
                )}
                <View
                  style={{
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <View
                    style={{
                      height: "60%",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <View
                      style={{
                        position: "absolute",
                        top: 8,
                        left: 8,
                        backgroundColor: "#E8700A",
                        borderRadius: 10,
                      }}
                    >
                      <Text
                        style={{
                          color: "#0B0A09",
                          paddingVertical: 3,
                          paddingHorizontal: 8,
                          fontWeight: 600,
                        }}
                      >
                        -10%
                      </Text>
                    </View>
                    {WelcomeImage ? (
                      <Image
                        source={WelcomeImage}
                        placeholder={"Data"}
                        contentFit="cover"
                        transition={1000}
                        style={{ width: "100%", height: "100%" }}
                      />
                    ) : (
                      <Text style={[globalStyles.h3, { color: "#6F6254" }]}>
                        Фото
                      </Text>
                    )}
                  </View>

                  <View style={{ flex: 1, flexDirection: "column", gap: 2 }}>
                    <Text
                      style={[
                        globalStyles.p_mini,
                        {
                          paddingHorizontal: 12,
                          paddingTop: 10,
                          color: "#EDE3D6",
                        },
                      ]}
                    >
                      Пальто [Модель]
                    </Text>
                    <Text
                      style={[
                        globalStyles.p_mini,
                        {
                          paddingHorizontal: 12,
                          paddingBottom: 10,
                          color: "#EDE3D6",
                        },
                      ]}
                    >
                      [цена] ₽
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: "column", gap: 16 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                minHeight: 96,
                backgroundColor: "#14110E",
                borderRadius: 16,
                overflow: "hidden",
                padding: 16,
                marginVertical: 4,
                gap: 12,
              }}
            >
              <View
                style={{
                  flex: 2,
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <Text style={[globalStyles.p_ultra_mini, { color: "#E8700A" }]}>
                  ОБЪЯВЛЕНИЕ ДЛЯ РАЙОНА
                </Text>
                <Text style={[globalStyles.h3, { color: "#EDE3D6" }]}>
                  Сбор средств на постройку мечети
                </Text>
                <Text style={[globalStyles.p, { color: "#A99C8D" }]}>
                  Также необходима рабочая сила
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: "#0c0b0a",
    gap: 14,
  },
});
