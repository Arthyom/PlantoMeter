//Inputs
const int sensorPin = A0;

void setup() {
  Serial.begin(9600);  
}

void loop() {
  //Read the analog value
  int humedad = analogRead(sensorPin);
  int humedad2=(humedad/205)+1;
  
  if(humedad2==1)
   Serial.print("Muy mojado ");
   else if(humedad2==2)
   Serial.print("Mojado ");
   else if(humedad2==3)
   Serial.print("Estable ");
   else if(humedad2==4)
   Serial.print("Seco ");
   else
   Serial.print("Muy seco ");

  delay(5000); 
}
