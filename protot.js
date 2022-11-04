var plt = require('matplotlib.pyplot');
var np = require('numpy');
var time = require('time');
var os = require('os');

function grafico(vi,ac,tm) {
    fig, (gf1, gf2) = plt.subplots(2, 1);
    X = np.linspace(0, tm);
    fig.suptitle(null);
}
    Y1 = vi * X + 0.5 * ac * (X ** 2)  
    gf1.plot(X, Y1, marker='.', color='red');
    gf1.grid();
    gf1.set_title('Distancia');
    gf1.set_ylabel('Metros');
    gf1.set_xlabel('Segundos');

    Y2 = (ac * X) + vi 
    gf2.plot(X, Y2, marker='.');
    gf2.grid();
    gf2.set_title('Velocidad');
    gf2.set_ylabel('Metros/segundo');
    gf2.set_xlabel('Segundos');

    plt.subplots_adjust(hspace=0.6);
    plt.show();

dis_total=0;
while (true) {
    num_etapas = Number(input('Ingrese el numero de etapas: '));
    if (num_etapas >= 3) break 
    console.log('Tiene que ser mayor a 3 jaja');
for (i in range(num_etapas)) {
    console.log(f,'Inicio de la etapa n°{i+1}');
}
    n_no = 0;
}
    acel_ver=input('Sabe la aceleracion?(Si/No): ');
    if (acel_ver.lower()=='si') {
        tf_acel = true;
        acel = float(input('Introduzca la aceleracion: '));
    } else {
        tf_acel = false;
        n_no+=1;
    }
    if (n_no == 0) {
        tiempo_ver=input('Sabe el tiempo?(Si/No): ');
        if (tiempo_ver.lower()=='si') {
            tf_tiempo = true;
            tiempo = float(input('Introduzca el tiempo: '));
        } else {
            tf_tiempo = false;
            n_no+=1;
        } else {
        tf_tiempo = true;
        tiempo = float(input('Introduzca el tiempo: '));
        }
    }
   
    if (i == 0: 
        if (n_no == 0) {
            vel_ini_ver=input('Sabe la Velocidad Inicial?(Si/No): ');
            if (vel_ini_ver.lower()=='si') {
                vel_ini = float(input('Introduzca la velocidad inicial: '));
                tf_vel_ini = true;
            } else {
                tf_vel_ini = false;
                n_no+=1;} 
        else {
            vel_ini = float(input('Introduzca la velocidad inicial: '));
            tf_vel_ini = true;
    else: 
        if (tf_vel_fin==true: vel_ini = vel_fin;
        } else if (tf_vel_fin==false: vel_ini = vel_fin;

    if (tf_acel==true && tf_tiempo==true && tf_vel_ini==true) {
            tf_vel_fin = false;
    } else {
        if (n_no==0) {
            vel_fin_ver=input('Sabe la Velocidad Final?(Si/No): ');
            if (vel_fin_ver.lower()=='si') {
                vel_fin = float(input('Introduzca la velocidad final: '));
                tf_vel_fin = true;
        } else {
            tf_vel_fin = true;
            vel_fin = float(input('Introduzca la velocidad final: '));
            tf_vel_fin = true;
            }
    if (tf_vel_fin==false) {
        vel_fin = (acel*tiempo)+vel_ini;
        if (acel<0 == (vel_fin=0))
        console.log('La velocidad final es de:',vel_fin);

    if (tf_vel_ini==false) {
        vel_ini = vel_fin-acel*tiempo;
        console.log('La velocidad inicial es de:',vel_ini);
    }
    if (tf_tiempo==false) {
        tiempo = (vel_fin-vel_ini)/acel;
        console.log('El tiempo es de:',tiempo);
    }
    if (tf_acel==false) {
        acel = (vel_fin-vel_ini)/tiempo;
        console.log('La aceleracion es de:',acel);
    }

    dis_etapa = vel_ini*tiempo+0.5*acel*(tiempo**2);
    console.log(f,'La distancia recorrida es de: {dis_etapa}\n');
    dis_total += dis_etapa;
    time.sleep(1);
    }
    grafico(vel_ini,acel,tiempo);
        }
    input('Enter para continuar');
    os.system('cls');

            }
        }

}

