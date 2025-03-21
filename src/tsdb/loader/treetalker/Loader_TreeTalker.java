package tsdb.loader.treetalker;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.Charset;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Map.Entry;
import java.util.TreeSet;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.opencsv.CSVReader;

import tsdb.TsDB;
import tsdb.component.SourceEntry;
import tsdb.util.AssumptionCheck;
import tsdb.util.DataEntry;
import tsdb.util.DataRow;
import tsdb.util.TimeUtil;

public class Loader_TreeTalker {
	private static final Logger log = LogManager.getLogger();

	private static final Charset UTF8 = Charset.forName("UTF-8");
	private static final char SEPARATOR = ';';
	private static final LocalDateTime UNIX_EPOCH = LocalDateTime.of(1970,1,1,0,0);
	private static final int UNIX_EPOCH_OLE_AUTOMATION_TIME_DIFFERENCE_MINUTES = (int) Duration.between(TimeUtil.OLE_AUTOMATION_TIME_START, UNIX_EPOCH).toMinutes();

	private final TsDB tsdb;

	public Loader_TreeTalker(TsDB tsdb) {
		AssumptionCheck.throwNull(tsdb);
		this.tsdb = tsdb;
	}


	public void loadDirectoryRecursive(Path path) {
		log.info("TreeTalker import Directory "+path);
		try(DirectoryStream<Path> rootStream = Files.newDirectoryStream(path)) {
			for(Path sub:rootStream) {
				if(!Files.isDirectory(sub)) {
					try {
						loadFile(sub);
					} catch (Exception e) {
						e.printStackTrace();
						log.error(e+"  in "+sub);
					}
				} else {
					loadDirectoryRecursive(sub);
				}

			}
		} catch (Exception e) {
			log.error(e);
		}		
	}


	public void loadFile(Path filename) {
		log.info("TreeTalker import File "+ filename);
		try {
			new TreeTalkerTable(tsdb, filename.toFile());
		} catch(Exception e) {
			e.printStackTrace();
			log.error(e);
		}
	}

	static LocalDateTime toDateTime(String timestampText) {
		long timeStampSeconds = Long.parseLong(timestampText);
		LocalDateTime datetime = UNIX_EPOCH.plusSeconds(timeStampSeconds);

		return datetime;
	}

	static int toTimestamp(String timestampText) {
		long timeStampSeconds = Long.parseLong(timestampText);
		int timestamp = UNIX_EPOCH_OLE_AUTOMATION_TIME_DIFFERENCE_MINUTES + (int)(timeStampSeconds / 60); 
		return timestamp;
	}

	static class TreeTalkerTable {
		public TreeTalkerTable(TsDB tsdb, File file) throws IOException {
			InputStreamReader in = new InputStreamReader(new FileInputStream(file),UTF8);
			try(CSVReader reader = new CSVReader(in, SEPARATOR)) {
				ArrayList<String[]> dataRowList = new ArrayList<String[]>();
				String[] curRow = reader.readNext();
				while(curRow != null){
					dataRowList.add(curRow);
					curRow = reader.readNext();
				}				
				String[][] tabeRows = dataRowList.toArray(new String[0][]);

				//ArrayList<DataEntry> tt4B_Battery_level = new ArrayList<DataEntry>();
				//int tt4B_Battery_level_prev = -1;

				HashMap<String, ArrayList<DataRow>> tt49_dataMap = new HashMap<String, ArrayList<DataRow>>();
				HashMap<String, ArrayList<DataRow>> tt4B_dataMap = new HashMap<String, ArrayList<DataRow>>();	
				HashMap<String, ArrayList<DataRow>> tt4C_dataMap = new HashMap<String, ArrayList<DataRow>>();	
				HashMap<String, ArrayList<DataRow>> tt4D_dataMap = new HashMap<String, ArrayList<DataRow>>();
				HashMap<String, ArrayList<DataRow>> tt53_dataMap = new HashMap<String, ArrayList<DataRow>>();

				//ArrayList<DataRow> tt4D_data = new ArrayList<DataRow>();
				//int tt4D_data_prev = -1;

				for (int i = 0; i < tabeRows.length; i++) {
					String[] row = tabeRows[i];
					if(row.length == 0 || row[0].isEmpty()) {
						log.info("skip empty line");
						continue;
					}
					String timeID = row[0];
					String tt_ID = "tt_" + timeID.substring(timeID.indexOf(',') + 1);
					//log.info(tt_ID);



					String tt_Type = row[2];

					switch(tt_Type) {
					case "49": {
						//log.info(tt_Type);					
						int timestamp = toTimestamp(row[3]);
						float[] data = new float[]{
								Float.parseFloat(row[4]),
								Float.parseFloat(row[5]),
								Float.parseFloat(row[6]),
								Float.parseFloat(row[7]),
								Float.parseFloat(row[8]),
								Float.parseFloat(row[9]),
								Float.parseFloat(row[10]),
								Float.parseFloat(row[11]),
								Float.parseFloat(row[12]),
								Float.parseFloat(row[13]),
								Float.parseFloat(row[14]),
								Float.parseFloat(row[15]),
								Float.parseFloat(row[16]),
								Float.parseFloat(row[17])};
						ArrayList<DataRow> tt49_data = tt49_dataMap.get(tt_ID);
						if(tt49_data == null) {
							tt49_data = new ArrayList<DataRow>();
							tt49_dataMap.put(tt_ID, tt49_data);
						}
						tt49_data.add(new DataRow(data, timestamp));
						break;
					}
					case "4B": { // status
						//log.info(tt_Type);					
						int timestamp = toTimestamp(row[3]);
						float[] data = new float[]{
								Float.parseFloat(row[4]),
								Float.parseFloat(row[5]),
								Float.parseFloat(row[6]),
								Float.parseFloat(row[7]),
								Float.parseFloat(row[8]),
								Float.parseFloat(row[9]),
								Float.parseFloat(row[10])};
						//Float.parseFloat(row[11]) // Firmware Version is not a number							
						ArrayList<DataRow> tt4B_data = tt4B_dataMap.get(tt_ID);
						if(tt4B_data == null) {
							tt4B_data = new ArrayList<DataRow>();
							tt4B_dataMap.put(tt_ID, tt4B_data);
						}
						tt4B_data.add(new DataRow(data, timestamp));
						break;
					}
					case "4C": { // status
						//log.info(tt_Type);					
						int timestamp = toTimestamp(row[3]);
						float[] data = new float[]{
								Float.parseFloat(row[4]),
								Float.parseFloat(row[5]),
								Float.parseFloat(row[6]),
								Float.parseFloat(row[7]),
								Float.parseFloat(row[8]),
								Float.parseFloat(row[9]),
								Float.parseFloat(row[10]),
								Float.parseFloat(row[11]),
								Float.parseFloat(row[12]),
								Float.parseFloat(row[13]),
								Float.parseFloat(row[14]),
								Float.parseFloat(row[15]),
								Float.parseFloat(row[16]),
								Float.parseFloat(row[17]),
								Float.parseFloat(row[18]),
								Float.parseFloat(row[19]),
								Float.parseFloat(row[20]),
								Float.parseFloat(row[21]),
								Float.parseFloat(row[22]),
								Float.parseFloat(row[23]),
								Float.parseFloat(row[24]),
								Float.parseFloat(row[25]),
								Float.parseFloat(row[26]),
								//Float.parseFloat(row[27]), // Not connected device 
								//Float.parseFloat(row[28]), // Not connected device
								//Float.parseFloat(row[29]), // Not connected device
						};
						ArrayList<DataRow> tt4C_data = tt4C_dataMap.get(tt_ID);
						if(tt4C_data == null) {
							tt4C_data = new ArrayList<DataRow>();
							tt4C_dataMap.put(tt_ID, tt4C_data);
						}
						tt4C_data.add(new DataRow(data, timestamp));
						break;
					}
					case "4D": {
						//log.info(tt_Type);					
						int timestamp = toTimestamp(row[3]);
						float[] data = new float[]{
								Float.parseFloat(row[4]),
								Float.parseFloat(row[5]),
								Float.parseFloat(row[6]),
								Float.parseFloat(row[7]),
								Float.parseFloat(row[8]),
								Float.parseFloat(row[9]),
								Float.parseFloat(row[10]),
								Float.parseFloat(row[11]),
								Float.parseFloat(row[12]),
								Float.parseFloat(row[13]),
								Float.parseFloat(row[14]),
								Float.parseFloat(row[15]),
								Float.parseFloat(row[16]),
								Float.parseFloat(row[17]),
								Float.parseFloat(row[18]),
								Float.parseFloat(row[19]),
								Float.parseFloat(row[20])};
						ArrayList<DataRow> tt4D_data = tt4D_dataMap.get(tt_ID);
						if(tt4D_data == null) {
							tt4D_data = new ArrayList<DataRow>();
							tt4D_dataMap.put(tt_ID, tt4D_data);
						}
						tt4D_data.add(new DataRow(data, timestamp));
						break;
					}
					case "53": { // 53 = three level ground moisture sensor log record identifier
						//log.info(tt_Type);					
						int timestamp = toTimestamp(row[3]);
						float[] data = new float[]{
								Float.parseFloat(row[4]),
								Float.parseFloat(row[5]),
								Float.parseFloat(row[6]),
								Float.parseFloat(row[7]),
								Float.parseFloat(row[8]),
								Float.parseFloat(row[9]),
								Float.parseFloat(row[10]),
								Float.parseFloat(row[11]),
								Float.parseFloat(row[12]),
								Float.parseFloat(row[13]),
								Float.parseFloat(row[14]),
								Float.parseFloat(row[15]),
								Float.parseFloat(row[16]),
								Float.parseFloat(row[17]),
								Float.parseFloat(row[18]),
								Float.parseFloat(row[19]),
								Float.parseFloat(row[20])};
						ArrayList<DataRow> tt53_data = tt53_dataMap.get(tt_ID);
						if(tt53_data == null) {
							tt53_data = new ArrayList<DataRow>();
							tt53_dataMap.put(tt_ID, tt53_data);
						}
						tt53_data.add(new DataRow(data, timestamp));
						break;
					}
					default: {
						log.warn("unknown tt_Type" +tt_Type);
						/*long timeStampSeconds = Long.parseLong(row[3]);
					LocalDateTime datetime = TIME_START.plusSeconds(timeStampSeconds);
					log.info(row[0] + "   " + timeStampText + "  " + datetime + row[3]);*/
					}
					}


				}

				/*DataEntry[] a = tt4B_Battery_level.toArray(new DataEntry[0]);			
			log.info(Arrays.toString(a));
			tsdb.streamStorage.insertDataEntryArray("treetalker_test_plot1", "sensor_1", a);*/


				String[] tt49_sensors = new String[] {
						"ttraw_AS7263_610",
						"ttraw_AS7263_680",
						"ttraw_AS7263_730",
						"ttraw_AS7263_760",
						"ttraw_AS7263_810",
						"ttraw_AS7263_860",
						"ttraw_AS7262_450",
						"ttraw_AS7262_500",
						"ttraw_AS7262_550",
						"ttraw_AS7262_570",
						"ttraw_AS7262_600",
						"ttraw_AS7262_650",
						"ttraw_integration_time",
						"ttraw_gain"
				};

				String[] tt4B_sensors = new String[] {
						"ttraw_accumulated_records",
						"ttraw_records_to_send",
						"ttraw_MCC_telephone_operator",
						"ttraw_MNC_telephone_operator",
						"ttraw_GSM_registration",
						"ttraw_GSM_field level",
						"tt_Battery_level",
						// "Firmware Version", // Firmware Version is not a number	
				};			

				String[] tt4C_sensors = new String[] {
						"ttraw_TBL_LOCKED",
						"ttraw_first_sensor",
						"ttraw_TT01",
						"ttraw_TT02",
						"ttraw_TT03",
						"ttraw_TT04",
						"ttraw_TT05",
						"ttraw_TT06",
						"ttraw_TT07",
						"ttraw_TT08",
						"ttraw_TT09",
						"ttraw_TT10",
						"ttraw_TT11",
						"ttraw_TT12",
						"ttraw_TT13",
						"ttraw_TT14",
						"ttraw_TT15",
						"ttraw_TT16",
						"ttraw_TT17",
						"ttraw_TT18",
						"ttraw_TT19",
						"ttraw_TT20",
						"ttraw_TT21",
				};			

				String[] tt4D_sensors = new String[] {
						"ttraw_Tref",
						"ttraw_Theat",
						"ttraw_growth",
						"ttraw_adc_bandgap",
						"ttraw_bits",
						"tt_air_relative_humidity",
						"ttraw_air_temperature",
						"ttraw_g_z",
						"ttraw_g_z_std", 
						"ttraw_g_y", 
						"ttraw_g_y_std", 
						"ttraw_g_x", 
						"ttraw_g_x_std", 
						"ttraw_Tref_1", 
						"ttraw_Theat_1", 
						"ttraw_StWC", 
						"ttraw_adc_Vbat"
				};

				String[] tt53_sensors = new String[] {
						"ttraw_adc_bandgap",
						"ttraw_bits",
						"tt_air_relative_humidity",
						"ttraw_air_temperature",
						"ttraw_g_z",
						"ttraw_g_z_std", 
						"ttraw_g_y", 
						"ttraw_g_y_std", 
						"ttraw_g_x", 
						"ttraw_g_x_std", 
						/*"ttraw_gms_fq_1", // frequency of ground moisture sensor #1
					"ttraw_gms_ntc_1", // ntc value of ground moisture sensor #1
					"ttraw_gms_fq_2", // frequency of ground moisture sensor #2
					"ttraw_gms_ntc_2", // ntc value of ground moisture sensor #2
					"ttraw_gms_fq_3", // frequency of ground moisture sensor #3
					"ttraw_gms_ntc_3", // ntc value of ground moisture sensor #3*/
						"ttraw_gms_ntc_1", // ntc value of ground moisture sensor #1 !! swapped !!					
						"ttraw_gms_fq_1", // frequency of ground moisture sensor #1 !! swapped !!
						"ttraw_gms_ntc_2", // ntc value of ground moisture sensor #2 !! swapped !!
						"ttraw_gms_fq_2", // frequency of ground moisture sensor #2 !! swapped !!
						"ttraw_gms_ntc_3", // ntc value of ground moisture sensor #3 !! swapped !!
						"ttraw_gms_fq_3", // frequency of ground moisture sensor #3 !! swapped !!
						"ttraw_adc_Vbat",
				};


				TreeSet<String> missingStationsCollector = new TreeSet<String>();

				try {
					insert(tsdb, tt49_dataMap, tt49_sensors, missingStationsCollector, file.toPath());
				}catch(Exception e) {
					log.warn("at tt49 " + e.getMessage());
				}
				try {
					insert(tsdb, tt4B_dataMap, tt4B_sensors, missingStationsCollector, file.toPath());
				}catch(Exception e) {
					log.warn("at tt4B " + e.getMessage());
				}
				try {
					insert(tsdb, tt4C_dataMap, tt4C_sensors, missingStationsCollector, file.toPath());
				}catch(Exception e) {
					e.printStackTrace();
					log.warn("at tt4C " + e.getMessage());
				}
				try {
					insert(tsdb, tt4D_dataMap, tt4D_sensors, missingStationsCollector, file.toPath());
				}catch(Exception e) {
					log.warn("at tt4D " + e.getMessage());
				}
				try {
					insert(tsdb, tt53_dataMap, tt53_sensors, missingStationsCollector, file.toPath());
				}catch(Exception e) {
					log.warn("at tt53 " + e.getMessage());
				}

				if(!missingStationsCollector.isEmpty()) {
					String s = "missing stations";
					for(String station:missingStationsCollector) {
						s += "\n" + station;
					}
					log.warn(s);
				}
			}
		}

		void insert(TsDB tsdb, HashMap<String, ArrayList<DataRow>> ttx_dataMap, String[] ttx_sensors, TreeSet<String> missingStationsCollector, Path filename) {			
			for(Entry<String, ArrayList<DataRow>> e:ttx_dataMap.entrySet()) {
				String tt_ID = e.getKey();
				ArrayList<DataRow> dataRows = e.getValue();
				//log.info("insert in " + tt_ID + "  " + dataRows.size());
				//log.info(dataRows.toString());
				dataRows.sort(new Comparator<DataRow>() {
					@Override
					public int compare(DataRow o1, DataRow o2) {
						return Long.compare(o1.timestamp, o2.timestamp);
					}
				});


				int sensors = ttx_sensors.length;
				ArrayList<DataEntry> dataEntryList = new ArrayList<DataEntry>(dataRows.size());
				for(int i=0;i<sensors;i++) {
					dataEntryList.clear();
					long prevTimestamp = -1;
					for(DataRow dataRow:dataRows) {
						float v = dataRow.data[i];
						if(prevTimestamp < dataRow.timestamp && Float.isFinite(v)) {
							dataEntryList.add(new DataEntry((int)dataRow.timestamp, v));
							prevTimestamp = dataRow.timestamp;
						} else {
							//log.info("skip " + v);
						}

					}
					if(tsdb.getStation(tt_ID) == null) {
						//log.warn("missing station " + tt_ID);
						missingStationsCollector.add(tt_ID);
					}
					DataEntry[] dataEntries = dataEntryList.toArray(new DataEntry[0]);
					tsdb.streamStorage.insertDataEntryArray(tt_ID, ttx_sensors[i], dataEntries);
				}
				tsdb.sourceCatalog.insert(SourceEntry.of(tt_ID, ttx_sensors, dataRows, filename.resolve(tt_ID)));
			}			
		}

	}
}
