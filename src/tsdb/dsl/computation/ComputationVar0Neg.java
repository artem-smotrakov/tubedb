package tsdb.dsl.computation;

public class ComputationVar0Neg extends Computation {	
	@Override
	public float eval(long timestamp, float[] data) {
		return - data[0];				
	}
}
