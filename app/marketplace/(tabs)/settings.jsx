import { View, SafeAreaView, StyleSheet } from 'react-native';
import { Text, Avatar, Button, Card, Divider, Menu, IconButton, MD3Colors } from 'react-native-paper';
import React from 'react';
import { router } from 'expo-router';
import AddStore from '../../../components/AddStore';

const settings = () => {
  const [visible, setVisible] = React.useState(false);
  const [visibleDialog, setVisibleDialog] = React.useState(false);

  const showDialog = () => setVisibleDialog(true);

  const hideDialog = () => setVisibleDialog(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <AddStore visibleDialog={visibleDialog} hideDialog={hideDialog} />
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Avatar.Image size={100} source={{ uri: 'https://via.placeholder.com/100' }} style={styles.avatar} />
          <Text style={styles.username}>@appsinnppuser</Text>
          <Text style={styles.email}>developer@appsnipp.com</Text>
        </View>

        {/* Account Info Section */}
        <View style={styles.card}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text variant='headlineSmall' style={{ fontWeight: 'bold', marginBottom: 30 }}>
              Account Info
            </Text>

            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={<IconButton icon='dots-horizontal' iconColor={'black'} size={20} onPress={openMenu} />}
              style={{ marginRight: 10 }}
            >
              <Menu.Item
                onPress={() => {
                  closeMenu();
                  showDialog();
                }}
                title='Add Store'
              />
            </Menu>
          </View>

          <View style={styles.infoRow}>
            <Avatar.Icon size={40} icon='account' style={styles.icon} color='white' />
            <Text style={styles.infoText}>Name: developer</Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.infoRow}>
            <Avatar.Icon size={40} icon='phone' style={styles.icon} color='white' />
            <Text style={styles.infoText}>Mobile: +91-8129999999</Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.infoRow}>
            <Avatar.Icon size={40} icon='email' style={styles.icon} color='white' />
            <Text style={styles.infoText}>Email: developer@appsnipp.com</Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.infoRow}>
            <Avatar.Icon size={40} icon='map-marker' style={styles.icon} color='white' />
            <Text style={styles.infoText}>Address: Avenue 2nd Street NW SY</Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.infoRow}>
            <Avatar.Icon size={40} icon='calendar' style={styles.icon} color='white' />
            <Text style={styles.infoText}>D.O.B: 12-05-1990</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#7ED4AD',
    paddingVertical: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'relative',
  },
  avatar: {
    marginBottom: 10,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  email: {
    fontSize: 14,
    color: '#fff',
  },
  card: {
    margin: 20,
    marginTop: 50,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  icon: {
    marginRight: 15,
    backgroundColor: '#7ED4AD',
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
  divider: {
    marginVertical: 5,
  },
});

export default settings;
